import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';



export default function CompareImageSlider(props) {

  const handleDownload = (Image_url) => {
    const link = document.createElement('a');
    link.href = Image_url;
    link.download = 'after.jpg';  // Specify the download file name
    link.click();
  };

  return (
    <div style={{ margin: '5vh', backgroundColor: 'black' }}>
      {/* https://www.npmjs.com/package/react-compare-slider */}
      <ReactCompareSlider
        itemOne={<ReactCompareSliderImage src={props.beforeImage} alt="Image one" style={{ objectFit: 'scale-down' }} />}
        itemTwo={<ReactCompareSliderImage src={props.afterImage} alt="Image two" style={{ objectFit: 'scale-down' }} />}
        style={{ objectFit: 'scale-down', height: '80vh', backgroundColor: 'black' }}
      />
      <div>
        <a href={props.afterImage} download="after.jpg" className="download-button">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="download-icon">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8l-8 8-8-8" />
          </svg>
        </a>
      </div>
    </div>


  )
}
