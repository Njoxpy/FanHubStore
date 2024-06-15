import { NavLink } from "react-router-dom";

import Footer from "../layout/Footer"

export default function TermsLayout() {
    return (
        <main>
            <div className="p-8">
                <h1 className="font-bold text-center p-4">Terms Page</h1>
                <nav className="text-center m-2">
                    <NavLink to="privacy" className="p-4 m-2 focus:bg-blue focus:text-white rounded hover:font-bold">View Privacy Policy</NavLink>
                    <NavLink to="conditions" className="p-4 m-2 focus:bg-blue focus:text-white rounded hover:font-bold">View Terms and Condition</NavLink>
                </nav>
            </div>
            <Footer />
        </main>
    )
}
