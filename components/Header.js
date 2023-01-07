import headerStyles from "../styles/Header.module.css";

export default function Header() {
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>KTauchert - Dev </span> News
            </h1>
            <p>
                Immer dran bleiben. Dabei meine Portfolio Seite mit Next.JS zu
                entwickeln.
            </p>
        </div>
    );
}
