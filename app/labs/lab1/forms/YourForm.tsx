export default function YourForm() {
    return (
        <form id="wd-your-form">
            <label htmlFor="wd-your-form-first-name">First name:</label>
            <input type="text" title="John" id="wd-your-form-first-name" />{" "}
            <br />
            <label htmlFor="wd-your-form-last-name">Last name:</label>
            <input type="text" title="Doe" id="wd-your-form-last-name" />{" "}
            <br />
            <label htmlFor="wd-your-form-password">Password:</label>
            <input 
                type="password"
                defaultValue="101"
                id="wd-your-form-password"
            />
            <br />
            <textarea 
                id="wd-your-form-bio"
                cols={82}
                rows={3}
                defaultValue="Hello, my name is Maximilian (Max) Hill. I am a computer science major graduating this fall. I am taking this course as one of the last requirements for the Software concentration."
            />
            <br />
            <label>Class Standing:</label>
            <br />
            <input type="radio" name="radio-class-standing" id="wd-your-form-radio-freshman" />
            <label htmlFor="wd-your-form-radio-freshman">Freshman</label>
            <br />
            <input type="radio" name="radio-class-standing" id="wd-your-form-radio-sophomore" />
            <label htmlFor="wd-your-form-radio-sophomore">Sophomore</label>
            <br />
            <input type="radio" name="radio-class-standing" id="wd-your-form-radio-junior" />
            <label htmlFor="wd-your-form-radio-junior">Junior</label>
            <br />
            <input type="radio" name="radio-class-standing" id="wd-your-form-radio-senior" />
            <label htmlFor="wd-your-form-radio-senior">Senior</label>
            <br />
            <input type="radio" name="radio-class-standing" id="wd-your-form-radio-graduate" />
            <label htmlFor="wd-your-form-radio-graduate">Graduate</label>
            <br />
            <label>Credit Hours</label>
            <br />
            <input type="radio" name="radio-credit-hours" id="wd-your-form-radio-full-time" />
            <label htmlFor="wd-your-form-radio-full-time">Full-Time</label>
            <br />
            <input type="radio" name="radio-credit-hours" id="wd-your-form-radio-part-time" />
            <label htmlFor="wd-your-form-radio-part-time">Part-Time</label>
            <br />
            <label>Favorite Video Game:</label>
            <br />
            <input type="checkbox" name="check-video-game" id="wd-your-form-check-game-destiny" />
            <label htmlFor="wd-your-form-check-game-destiny">Destiny 1</label>
            <br />
            <input type="checkbox" name="check-video-game" id="wd-your-form-check-game-terraria" />
            <label htmlFor="wd-your-form-check-game-terraria">Terraria</label>
            <br />
            <input type="checkbox" name="check-video-game" id="wd-your-form-check-game-eldenring" />
            <label htmlFor="wd-your-form-check-game-eldenring">Elden Ring</label>
            <br />
            <label>Favorite Travel Location:</label>
            <br />
            <input type="checkbox" name="check-travel" id="wd-your-form-check-travel-france" />
            <label htmlFor="wd-your-form-check-travel-france">France</label>
            <br />
            <input type="checkbox" name="check-travel" id="wd-your-form-check-travel-japan" />
            <label htmlFor="wd-your-form-check-travel-japan">Japan</label>
            <br />
            <input type="checkbox" name="check-travel" id="wd-your-form-check-travel-mexico" />
            <label htmlFor="wd-your-form-check-travel-mexico">Mexico</label>
            <br />
            <label>Your first language:</label>
            <br />
            <input type="checkbox" name="check-language" id="wd-your-form-check-language-english" />
            <label htmlFor="wd-your-form-check-language-english">English</label>
            <br />
            <input type="checkbox" name="check-language" id="wd-your-form-check-language-spanish" />
            <label htmlFor="wd-your-form-check-language-spanish">Spanish</label>
            <br />
            <input type="checkbox" name="check-language" id="wd-your-form-check-language-chinese" />
            <label htmlFor="wd-your-form-check-language-chinese">Chinese</label>
            <br />
            <label htmlFor="wd-your-form-select-one-major">Your Major: </label>
            <br />
            <select id="wd-your-form-select-one-major" defaultValue="UNDECLARED">
                <option value="COMPUTERSCIENCE">Computer Science</option>
                <option value="ENGINEERING">Engineering</option>
                <option value="PHYSICS">Physics</option>
                <option value="ENGLISH">English</option>
                <option value="UNDECLARED">Undeclared</option>
            </select>
            <br />
            <label htmlFor="wd-your-form-select-many-topics">Topics You Want to Deepen:</label>
            <br />
            <select
                multiple
                id="wd-your-form-select-many-topics"
                defaultValue={["WEBDEV", "SOFTENG"]}
            >
                <option value="WEBDEV">Web Development</option>
                <option value="THEORCOMP">Theory of Computation</option>
                <option value="LINALG">Linear Algebra</option>
                <option value="SOFTENG">Software Engineering</option>
            </select>
            <br />
            <label htmlFor="wd-your-form-email">Email: </label>
            <input
                type="email"
                placeholder="@northeastern.edu"
                id="wd-your-form-email"
            />
            <br />
            <label htmlFor="wd-your-form-grad-year">Expected Graduation Year: </label>
            <input
                type="number"
                defaultValue="2026"
                placeholder="2026"
                min="2026"
                max="2028"
                id="wd-your-form-grad-year"
            />
            <br />
            <label htmlFor="wd-your-form-dob">Date of birth: </label>
            <input
                type="date"
                defaultValue="2000-01-01"
                min="1900-01-01"
                max="2026-9-25"
                id="wd-your-form-dob"
            />
            <br />
            <label htmlFor="wd-your-form-excitement-range">Excitement for course: </label>
            <input
                type="range"
                defaultValue="5"
                min="0"
                max="10"
                id="wd-your-form-excitement-range"
            />
            <br />
            <button id="wd-your-form-button-save" type="submit">
                Save
            </button>
            <button id="wd-your-form-button-cancel" type="button">
                Cancel
            </button>
        </form>
    )
}