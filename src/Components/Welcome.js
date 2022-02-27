export default function Welcome(props) {
    return (
        <>
            <div data-testid="email">{props.email}</div>

            <div className="text-right">
                <button type="button" className="btn btn-fg font-weight-bold">Sign In</button>
            </div>
        </>
    );
}