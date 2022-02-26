export default function Modal(props) {
    return (
        <div className="form-modal col-12 col-md-8 col-lg-6">
            <h3 className="text-left">{props.headerFirst}<br/><span className="font-weight-bold">{props.headerSecond}</span></h3>

            <p className="pt-2">{props.info}</p>

            {props.content}
        </div>
    );
}