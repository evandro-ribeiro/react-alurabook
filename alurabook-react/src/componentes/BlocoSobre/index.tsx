interface BlocoSobreProps {
    titulo: string
    corpo: string | undefined
}

const BlocoSobre = ({ titulo, corpo }: BlocoSobreProps) => {
    return (
        <>
            <h3>{titulo}</h3>
            <p>{corpo}</p>
        </>
    );
}

export default BlocoSobre;