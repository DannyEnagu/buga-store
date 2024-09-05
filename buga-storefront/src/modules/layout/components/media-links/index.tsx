import { Text } from "@medusajs/ui";
import {
    FaTiktok,
    FaYoutube,
    FaInstagram,
    FaFacebookSquare
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function MediaLinks() {
    return (
        <Text className="flex items-center gap-6">
            <a
                href="https://www.instagram.com/buga-store/"
                target="_blank" rel="noreferrer"
                aria-label="link to instagram"
                className="transition-all duration-300 ease-in-out hover:scale-125"
            >
                <FaInstagram size={27} />
            </a>
            <a
                href="https://www.youtube.com/buga-store" target="_blank" rel="noreferrer" aria-label="link to youtube"
                className="transition-all duration-300 ease-in-out hover:scale-125"
            >
                <FaYoutube size={30} />
            </a>
            <a
                href="https://web.facebook.com/buga-store"
                target="_blank"
                rel="noreferrer"
                aria-label="link to facebook"
                className="transition-all duration-300 ease-in-out hover:scale-125"
            >
                <FaFacebookSquare size={25} />
            </a>
            <a
                href="https://x.com/buga_store" target="_blank" rel="noreferrer" aria-label="link to titter"
                className="transition-all duration-300 ease-in-out hover:scale-125"
            >
                <FaXTwitter size={25} />
            </a>
            <a
                href="https://www.tiktok.com/@buga-store" target="_blank" rel="noreferrer" aria-label="link to tiktok"
                className="transition-all duration-300 ease-in-out hover:scale-125"
            >
                <FaTiktok size={25} />
            </a>
        </Text>
    )
}