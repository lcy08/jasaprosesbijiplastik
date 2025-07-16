import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // Optional: icon

function BackTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
  onClick={scrollToTop}
  aria-label="Back to top"
  className={`fixed bottom-6 right-6 z-50 
    p-3 md:p-4 
    rounded-full shadow-lg 
    bg-jungle-green-600 hover:bg-jungle-green-700 
    text-white transition-opacity duration-300
    ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
>
  <ArrowUp className="w-6 h-6" />
</button>
  );
}

export default BackTop;
