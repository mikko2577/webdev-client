export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="600px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        height="400px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />
      <img
        id="wd-your-images"
        src="/images/bunny.jpg"
        height="320px"
        alt="bunny bot if load faild"
      />
      <br />
      Loading another image from the internet:
      <br />
      <img
        id="wd-ai-image"
        src="https://images.unsplash.com/photo-1518770660439-4636190af475"
        width="590px"
        alt="Webb telescope deep field"
      />
    </div>
  );
}