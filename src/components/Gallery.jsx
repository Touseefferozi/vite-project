import CircularGallery from '../../Reatbits/CircularGallery/CircularGallery';

function Gallery(props) {
  return (
    <div className=" bg-black text-white p-10 min-h-screen -mt-50">
      <div style={{ height: '600px', position: 'relative' }}>
        <CircularGallery 
          bend={3} 
          textColor="#ffffff" 
          // hover="true"
          borderRadius={0.05} 
          scrollEase={0.02}
        />
      </div>
    </div>
  );
}

export default Gallery;