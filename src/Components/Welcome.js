import FlipgridButton from "./FlipgridButton";

export default function Welcome(props) {
    return (
        <>
            <div data-testid="email">{props.email}</div>

            <FlipgridButton/>
        </>
    );
}