import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import InteractiveDemo from '../components/InteractiveDemo';
import Features from '../components/Features';
import VoiceSection from '../components/VoiceSection';
import BlogList from '../components/BlogList';
import Support from '../components/Support';
import ZenAiTeaser from '../components/ZenAiTeaser';

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
            <VoiceSection onSelectPost={handlePostSelect} />
            <InteractiveDemo />
            <ZenAiTeaser />
            <BlogList onSelectPost={handlePostSelect} onSeeAll={handleBlogClick} limit={3} />
            <Support />
        </>
    );
};

export default Home;
