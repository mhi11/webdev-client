export default function Tables() {
    return (
        <div id="wd-tables">
            <h4>Table Tag</h4>
            <table border={1} width="100%">
                <thead>
                    <tr>
                        <th>Quiz</th>
                        <th align="center">Topic</th>
                        <th align="center">Date</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Q1</td>
                        <td align="center">HTML</td>
                        <td align="center">2/3/21</td>
                        <td align="right">85</td>
                    </tr>
                    <tr>
                        <td>Q2</td>
                        <td align="center">CSS</td>
                        <td align="center">2/10/21</td>
                        <td align="right">90</td>
                    </tr>
                    <tr>
                        <td>Q3</td>
                        <td align="center">JavaScript</td>
                        <td align="center">2/17/21</td>
                        <td align="right">95</td>
                    </tr>
                    <tr>
                        <td>Q4</td>
                        <td align="center">Forms</td>
                        <td align="center">2/24/21</td>
                        <td align="right">88</td>
                    </tr>
                    <tr>
                        <td>Q5</td>
                        <td align="center">Tables</td>
                        <td align="center">3/3/21</td>
                        <td align="right">92</td>
                    </tr>
                    <tr>
                        <td>Q6</td>
                        <td align="center">React Basics</td>
                        <td align="center">3/10/21</td>
                        <td align="right">80</td>
                    </tr>
                    <tr>
                        <td>Q7</td>
                        <td align="center">React Components</td>
                        <td align="center">3/17/21</td>
                        <td align="right">87</td>
                    </tr>
                    <tr>
                        <td>Q8</td>
                        <td align="center">State Management</td>
                        <td align="center">3/24/21</td>
                        <td align="right">91</td>
                    </tr>
                    <tr>
                        <td>Q9</td>
                        <td align="center">Routing</td>
                        <td align="center">3/31/21</td>
                        <td align="right">89</td>
                    </tr>
                    <tr>
                        <td>Q10</td>
                        <td align="center">APIs and Fetch</td>
                        <td align="center">4/7/21</td>
                        <td align="right">93</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={3}>Average</td>
                        <td align="right">89</td>
                    </tr>
                </tfoot>
            </table>
            <table id="wd-your-table" border={1} width="100%">
                <thead>
                    <tr>
                        <th>Class Name</th>
                        <th align="center">Class Code</th>
                        <th align="center">Meeting Days</th>
                        <th align="center">Meeting Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Fundamantals of Software Engineering</td>
                        <td align="center">CS4530</td>
                        <td align="center">Monday, Thursday</td>
                        <td align="center">11:45 AM - 1:25 PM</td>
                    </tr>
                    <tr>
                        <td>Linear Algebra</td>
                        <td align="center">MATH2331</td>
                        <td align="center">Monday, Wednesday, Thursday</td>
                        <td align="center">4:35 PM - 5:40 PM</td>
                    </tr>
                    <tr>
                        <td>Theory of Computation</td>
                        <td align="center">CS3800</td>
                        <td align="center">Tuesday, Friday</td>
                        <td align="center">3:25 PM - 5:05 PM</td>
                    </tr>
                    <tr>
                        <td>Web Development</td>
                        <td align="center">CS4550</td>
                        <td align="center">Wednesday</td>
                        <td align="center">6:00 PM - 9:20 PM</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}