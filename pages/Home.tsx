import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import InstallGuide from '../components/InstallGuide';
import BlogList from '../components/BlogList';
import Support from '../components/Support';
import { useNavigate } from 'react-router-dom';

interface HomeProps {
    onNavigate: (page: 'home' | 'blog' | 'privacy', targetId?: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
    const navigate = useNavigate();

    const handleBlogClick = () => {
        navigate('/blog');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handlePostSelect = (id: string) => {
        navigate(`/blog/${id}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <div id="hero"><Hero /></div>
            <Features onNavigate={onNavigate} />
            <Testimonials />
            <InstallGuide />
            {/* Usamos BlogList como teaser en la Home */}
            <div className="relative pb-24">
                <BlogList onSelectPost={handlePostSelect} limit={3} />
                <div className="absolute bottom-20 left-0 w-full flex justify-center z-10">
                    <button
                        onClick={handleBlogClick}
                        className="px-10 py-4 bg-zenth-markerBlue text-black font-marker text-2xl border-2 border-black rounded-xl shadow-sketch-lg hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all transform -rotate-1"
                    >
                        Ver Blog Completo ➔
                    </button>
                </div>
                {/* Fade out effect para el teaser */}
                <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-zenth-bg dark:from-zenth-darkBg to-transparent pointer-events-none"></div>
            </div>
            <Support />
        </>
    );
};

export default Home;
