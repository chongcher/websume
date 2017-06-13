import React from 'react';
import { Table } from 'react-bootstrap'

export default class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div className="col-xs-12">

                <div className="col-xs-10 col-xs-offset-1" style={{paddingBottom: "5vh"}}>
                I am currently a senior in the School of Information Systems, Singapore Management University, where I
                am pursuing a Bachelor of Science in Information Systems, with a second major in Operations Management.
                </div>

                <div className="col-xs-10 col-xs-offset-1">

                    <Table bordered condensed hover>
                        <tbody>
                            <tr>
                                <td colSpan={"2"} style={{textAlign: "center"}}>
                                    <b>Education</b>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>Singapore Management University</b><br/>
                                    B.S. Information Systems, Operations Management (Double Major)
                                </td>
                                <td>
                                    Aug 2014 to Aug 2018<br/>
                                    (Expected graduation)
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={"2"}  style={{textAlign: "center"}}>
                                    <b>Internship Experience</b>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>Credit Suisse (Singapore)</b><br/>
                                    <i>Summer Intern (2017)</i>
                                    <ul>
                                        <li>
                                            Created a frontend system for the Global Markets Equity Derivatives Department
                                        </li>
                                    </ul>
                                </td>
                                <td>
                                    Jun 2017 to Aug 2017
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>Frost Valley YMCA</b><br/>
                                    <i>Activities Team (Rope Counsellor)</i>
                                    <ul>
                                        <li>
                                            Involved in the camp-wide scheduling of activities for camp participants
                                        </li>
                                        <li>
                                            Co-led a 4 day backpacking trip in the Catskill Mountains
                                        </li>
                                        <li>
                                            Conducted team building exercises under the Experiential Learning framework
                                        </li>
                                    </ul>
                                </td>
                                <td>
                                    Jun 2016 to Aug 2016
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>All Hearts Adventure and Training</b><br/>
                                    <i>IT Intern</i>
                                    <ul>
                                        <li>
                                            Designed and developed SQL Database for storage of company data
                                        </li>
                                        <li>
                                            Designed and implemented a Web Application using Java/PHP/HTML
                                        </li>
                                        <li>
                                            Conducted team building exercises under the Experiential Learning framework
                                        </li>
                                    </ul>
                                </td>
                                <td>
                                    Jun 2015 to Aug 2015
                                </td>
                            </tr>
                        </tbody>
                    </Table>

                </div>

            </div>
        )
    }

}