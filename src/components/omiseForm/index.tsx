import { Fragment, useReducer, MouseEvent } from 'react'

const OmiseForm = () => {
    let [isOmiseLoaded, omiseLoaded] = useReducer(() => true, false)

    let handleOmiseLoaded = () => {
        omiseLoaded()

        OmiseCard.configure({
            publicKey: process.env.OMISE_PUBLIC_KEY
        })
    }

    const showOmiseForm = (
        event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
    ) => {
        event.preventDefault()

        if (!isOmiseLoaded) return

        OmiseCard.open({
            amount: 10,
            defaultPaymentMethod: 'truemoney',
            otherPaymentMethods: 'internet_banking',
            submitFormTarget: '#form',
            onCreateTokenSuccess: (nounce) => {
                console.log(nounce)
            },
            onFormClosed: () => {}
        })
    }

    return (
        <Fragment>
            <h1>Hi</h1>
            <form id="form" method="POST" action="/">
                <input type="hidden" name="omiseToken" />
                <input type="hidden" name="omiseSource" />
                <button type="submit" onClick={showOmiseForm}>
                    Show Omise Form
                </button>
            </form>
            <script
                type="text/javascript"
                src="https://cdn.omise.co/omise.js.gz"
                onLoad={handleOmiseLoaded}
            ></script>
        </Fragment>
    )
}

export default OmiseForm
