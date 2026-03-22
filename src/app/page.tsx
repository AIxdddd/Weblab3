"use client";

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/captioned.css";

interface AnimalData {
    header: string;
    content: string;
    img: string;
    email: string;
}

const headerStyle: React.CSSProperties = {
    color: 'white',
    position: "absolute",
    zIndex: 4,
    top: '40%',
    left: '50%',
    transform: 'translateX(-50%)',
    fontSize: '32px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
};

const contentStyle: React.CSSProperties = {
    color: 'white',
    textAlign: "center",
    top: '55%',
    left: '50%',
    transform: 'translateX(-50%)',
    position: "absolute",
    zIndex: 4,
    fontSize: '18px',
    textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
};

const bgImg: React.CSSProperties = {
    position: "absolute",
    zIndex: 3,
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover"
};

const sliderStyle: React.CSSProperties = {
    height: "500px",
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 20px rgba(0,0,0,0.2)"
};

function sendEmail(email: string) {
    const user = localStorage.getItem('user');
    const body = `Hello, I found your pet.%0A-----------%0ABest regards, ${user}`;
    window.open(`mailto:${email}?subject=Lost Pet&body=${body}`);
}

function Animal(props: { data: AnimalData | null }) {
    if (!props.data) return <p>Loading</p>;
    const { header, content, img } = props.data;
    return (
        <div style={{ position: 'relative', height: '100%', width: '100%' }}>
            <h1 style={headerStyle}>{header}</h1>
            <h2 style={contentStyle}>{content}</h2>
            <img
                //style={bgImg}
                alt={header}
                src={img}
            />
        </div>
    );
}

export default function Home() {
    const [animals, setAnimals] = useState<AnimalData[]>([]);

    useEffect(() => {
        fetch('/animals.json')
            .then(data => data.json())
            .then(data => setAnimals(data))
            .catch(err => console.error('Error loading animals:', err));
    }, []);

    useEffect(() => {
        let user = localStorage.getItem('user');
        if (user === null) {
            while (user === null) {
                user = prompt("Enter your username");
                if (!user) {
                    alert('Username is required!');
                } else {
                    localStorage.setItem('user', user);
                }
            }
        }
    }, []);

    function logout() {
        localStorage.clear();
        location.reload();
    }

    return (
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '20px'
        }}>
            <Head>
                <title>Petto</title>
                <meta name="description" content="Social network for pets" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                {/* Кнопка Logout */}
                <button
                    onClick={logout}
                    style={{
                        position: 'fixed',
                        top: '20px',
                        right: '20px',
                        zIndex: 20,
                        padding: '10px 20px',
                        background: '#ef4444',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
                        transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#dc2626';
                        e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#ef4444';
                        e.currentTarget.style.transform = 'scale(1)';
                    }}
                >
                    Выйти({localStorage.getItem('user')})
                </button>

                {/* Заголовок */}
                <h1 style={{
                    position: 'fixed',
                    top: '20px',
                    left: '20px',
                    zIndex: 20,
                    color: 'white',
                    background: 'rgba(0,0,0,0.5)',
                    padding: '10px 20px',
                    borderRadius: '10px',
                    fontSize: '28px',
                    fontWeight: 'bold',
                    backdropFilter: 'blur(5px)'
                }}>
                    🐾 Petto
                </h1>

                {/* Группа кнопок для навигации */}
                <div style={{
                    position: 'fixed',
                    top: '90px',
                    right: '20px',
                    zIndex: 20,
                    display: 'flex',
                    gap: '10px',
                    flexDirection: 'column'
                }}>
                    <Link
                        href="/content"
                        style={{
                            padding: '10px 20px',
                            background: '#3b82f6',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            textDecoration: 'none',
                            textAlign: 'center',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
                            transition: 'all 0.3s ease',
                            display: 'inline-block'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#2563eb';
                            e.currentTarget.style.transform = 'scale(1.05)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = '#3b82f6';
                            e.currentTarget.style.transform = 'scale(1)';
                        }}
                    >
                        📄 Информация о студенте
                    </Link>

                    <Link
                        href="/statistics"
                        style={{
                            padding: '10px 20px',
                            background: '#10b981',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            textDecoration: 'none',
                            textAlign: 'center',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
                            transition: 'all 0.3s ease',
                            display: 'inline-block'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#059669';
                            e.currentTarget.style.transform = 'scale(1.05)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = '#10b981';
                            e.currentTarget.style.transform = 'scale(1)';
                        }}
                    >
                        📊 Статистика администратора
                    </Link>
                </div>

                {/* Слайдер */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: 'calc(100vh - 100px)',
                    padding: '80px 20px 40px 20px'
                }}>
                    <div style={sliderStyle}>
                        <AwesomeSlider
                            style={{ height: "100%", width: "100%" } as React.CSSProperties}
                            bullets={true}
                            organicArrows={true}
                            mobileTouch={true}
                        >
                            {animals.map((data, i) => (
                                <div
                                    key={i}
                                    style={{
                                        zIndex: 2,
                                        cursor: 'pointer',
                                        height: '100%',
                                        width: '100%',
                                        position: 'relative'
                                    }}
                                    onClick={() => sendEmail(data.email)}
                                >
                                    <Animal data={data} />
                                </div>
                            ))}
                        </AwesomeSlider>
                    </div>
                </div>
            </main>

            <footer style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                textAlign: 'center',
                padding: '12px',
                background: 'rgba(0,0,0,0.7)',
                color: 'white',
                zIndex: 10,
                fontSize: '14px',
                backdropFilter: 'blur(5px)'
            }}>
                Petto, (c) 2024 - Social Network for Pet Owners
            </footer>
        </div>
    );
}