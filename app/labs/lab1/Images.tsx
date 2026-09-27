export default function Images() {
    return (
        <div id='wd-images'>
            <h4>Image tag</h4>
            Loading an image from the internet:
            <br />
            <img 
                id="wd-starship"
                width="400px"
                alt="Starship"
                src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
            />
            <br />
            Loading a local image:
            <br />
            <img
                id="wd-teslabot"
                src="/images/teslabot.jpg"
                height="200px"
                alt="Tesla Bot (Optimus) humanoid robot"
            />
            <br />
            Loading another remote sample image:
            <br />
            <img
                id="wd-ai-image"
                width="200px"
                alt="Webb telescope image of the Carina Nebula star-forming region"
                src="https://www.nasa.gov/wp-content/uploads/2023/03/main_image_star-forming_region_carina_nircam_final-5mb.jpg"
            />
            <br />
            My cat:
            <br />
            <img
                id="wd-your-image"
                src="/images/mycat.jpg"
                height="400px"
                alt="My cat named Jager"
            />
        </div>
    );
}