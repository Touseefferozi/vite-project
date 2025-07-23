import ChromaGrid from '../../Reatbits/ChromaGrid/ChromaGrid';

function Discount() {
  const items = [
    {
      image: "https://res.cloudinary.com/dapozvnbr/image/upload/v1600087655/Home/Southpark1_u3mgqr.png",
      title: "Sarah Johnson",
      subtitle: "Frontend Developer",
      handle: "@sarahjohnson",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      background: "white", // ✅ Apply white background
    
    },
    {
      image: "https://res.cloudinary.com/dapozvnbr/image/upload/v1600087652/Home/Family_Guy1_uem0rp.png",
      title: "Mike Chen",
      subtitle: "Backend Engineer",
      handle: "@mikechen",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      background: "white", // ✅ Apply white background
    

    },
    {
      image: "https://toonimized.netlify.app/static/media/bookCover.4576bcbd.png",
      title: "Mike Lock",
      subtitle: "Backend Engineer",
      handle: "@mikechen",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      background: "white", // ✅ Apply white background

    },
    {
      image: "https://res.cloudinary.com/dapozvnbr/image/upload/v1600087653/Home/Futurama1_sppeoo.png",
      title: "Esther Smith",
      subtitle: "Backend Engineer",
      handle: "@mikechen",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      background: "white", // ✅ Apply white background
      
    },

  ];

  return (
    <div
    style={{
    height: '800px',
    position: 'relative',
    marginTop: '700px',
    background: 'white', // ✅ Apply white background
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}

    >
      <ChromaGrid
        items={items}
        radius={300}
        damping={0.45}
        fadeOut={0.6}
        ease="power3.out"
        background="white" // ✅ Apply light gray background
        itemStyle={{
          width: '300px',
          height: '300px',
          borderRadius: '20px',
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
        }}
        // Optional: Add custom height to each item via ChromaGrid CSS if needed
      />
    </div>
  );
}

export default Discount;
