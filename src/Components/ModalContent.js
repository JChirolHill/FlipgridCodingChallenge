export default function ModalContent(props) {
    return (
        <>
            <h3 className="text-left">{props.headerFirst}<br/><span className="font-weight-bold">{props.headerSecond}</span></h3>

            <p className="pt-2">{props.info}</p>

            {props.content}
        </>
    );
}