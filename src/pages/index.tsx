import dynamic from 'next/dynamic'

const OmiseForm = dynamic(() => import('../components/omiseForm'), {
    ssr: false
})

const Landing = () => {
    return (
        <div>
            <OmiseForm />
        </div>
    )
}

export default Landing
