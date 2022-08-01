import "./Error.scss";

type ErrorProps = {
    children: string;
};

const Error: React.FC<ErrorProps> = ({ children }) => {
    return <p className="error">{children}</p>;
};

export { Error };
