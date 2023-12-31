"use client"
import { FileSearch } from "@phosphor-icons/react"
import Link from "next/link"

const NotFound = () => {
    return (
        <div className="min-h-screen max-w0xl mx-auto flex justify-center items-center">
            <div className="flex justify-center items-center gap-2 flex-col">
                <FileSearch size={44} className="text-color-accent"/>
                    <h3 className="text-color-accent text-4xl font-bold">Not Found</h3>
                <Link href="/" className="text-xl text-color-primary hover:text-color-accent transition-all">
                Kembali</Link>
            </div>
            
        </div>
    )
}

export default NotFound