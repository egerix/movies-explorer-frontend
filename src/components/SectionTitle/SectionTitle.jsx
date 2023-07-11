import './SectionTitle.css';

export default function SectionTitle({text}) {
    return (
        <>
            <h1 className='section__title'>
                {text}
            </h1>
        </>
    );
}
