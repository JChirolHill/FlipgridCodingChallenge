export default function Welcome(props) {
    return (
        <>
            {props.email}

            <div className="text-right">
                <button type="button" className="btn btn-fg font-weight-bold">Sign In</button>
            </div>
        </>
    );
}