import React, { PureComponent } from 'react'
import './Footer.css'

export class Footer extends PureComponent {
    render() {
        return (
            <div className="Footer">
                {/* Basic footer component and display for website */}
                <a className="footerText" href="http://ngandhi.me">This is my Capital One Summit Challenge. All-Rights Reserved - Neal Gandhi ~2021.</a>
            </div>
        )
    }
}

export default Footer
