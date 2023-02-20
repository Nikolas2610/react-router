import { Outlet, NavLink } from "react-router-dom";

export default function HelpLayout() {
    return (
        <div className="help-layout">
            <h2>Website Help</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum harum explicabo suscipit doloremque, dolorem error voluptatibus officia architecto deleniti voluptas aut accusamus ut obcaecati. Ipsa vitae officia rem omnis perspiciatis?</p>

            <nav>
                <NavLink to="faq">View the FAQ</NavLink>
                <NavLink to="contact">Contact us</NavLink>
            </nav>

            <main>
                <Outlet />
            </main>
        </div>
    )
}
