import ScrollHeader from "@modules/layout/components/scroll-header";
import Nav from "../nav";

export default function Header () {
    return (
        <>
            <header className="h-16 mx-auto border-b duration-200 bg-white border-ui-border-base">
                <Nav />
            </header>
            <ScrollHeader>
                <Nav />
            </ScrollHeader>
        </>
    )
}