
import CircularGallery from "./CircularGallery";

export default function DrawingGrid() {
  return (
 
     <div className="w-full" style={{ height: '640px',width:"2000px", position: 'relative' }}>
  <CircularGallery bend={2} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}
  

/>
</div>

 
  );
}
