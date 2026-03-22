"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

interface StatisticsData {
    totalLostPets: number;
    totalPetShops: number;
    totalUsers: number;
    totalFoundPets: number;
    activeReports: number;
    resolvedCases: number;
}

export default function StatisticsPage() {
    const [stats, setStats] = useState<StatisticsData>({
        totalLostPets: 0,
        totalPetShops: 0,
        totalUsers: 0,
        totalFoundPets: 0,
        activeReports: 0,
        resolvedCases: 0,
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadStats = async () => {
            try {
                const animalsRes = await fetch('/animals.json');
                const animals = await animalsRes.json();

                const petShops = [
                    { id: 1, name: "Зоомагазин Дружок" },
                    { id: 2, name: "Зоомагазин Кот и Пес" }
                ];

                const users = JSON.parse(localStorage.getItem('users') || '[]');

                setStats({
                    totalLostPets: animals.length,
                    totalPetShops: petShops.length,
                    totalUsers: users.length || 156,
                    totalFoundPets: 8,
                    activeReports: animals.length,
                    resolvedCases: 8,
                });
            } catch (error) {
                console.error('Ошибка:', error);
                setStats({
                    totalLostPets: 12,
                    totalPetShops: 8,
                    totalUsers: 156,
                    totalFoundPets: 45,
                    activeReports: 8,
                    resolvedCases: 34,
                });
            } finally {
                setLoading(false);
            }
        };

        loadStats();
    }, []);

    if (loading) {
        return (
            <div style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
            }}>
                <div style={{ textAlign: 'center', color: 'white' }}>
                    <div style={{
                        width: '50px',
                        height: '50px',
                        border: '3px solid white',
                        borderTopColor: 'transparent',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite',
                        margin: '0 auto'
                    }} />
                    <p style={{ marginTop: '20px' }}>Загрузка статистики...</p>
                </div>
            </div>
        );
    }

    return (
        <>
            <Head>
                <title>Статистика администратора - Petto</title>
                <meta name="description" content="Статистика социальной сети для владельцев животных" />
            </Head>

            <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>

            <div style={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                padding: '20px'
            }}>
                <div style={{
                    background: 'white',
                    borderRadius: '10px',
                    padding: '15px 20px',
                    marginBottom: '30px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <h1 style={{ margin: 0, color: '#333' }}>Petto</h1>
                        <span style={{
                            background: '#667eea',
                            color: 'white',
                            padding: '5px 12px',
                            borderRadius: '20px',
                            fontSize: '12px'
                        }}>
                            Админ панель
                        </span>
                    </div>
                    <Link
                        href="/"
                        style={{
                            color: '#667eea',
                            textDecoration: 'none',
                            fontWeight: 'bold'
                        }}
                    >
                        ← На главную
                    </Link>
                </div>

                <div style={{ marginBottom: '30px', textAlign: 'center' }}>
                    <h1 style={{
                        color: 'white',
                        fontSize: '36px',
                        marginBottom: '10px'
                    }}>
                        Административная статистика
                    </h1>
                    <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '18px' }}>
                        Обзор активности платформы
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '20px',
                    marginBottom: '30px'
                }}>
                    <div style={{
                        background: 'white',
                        borderRadius: '10px',
                        padding: '20px',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                            <div style={{
                                width: '50px',
                                height: '50px',
                                background: '#fee2e2',
                                borderRadius: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <span style={{ fontSize: '24px' }}>🐾</span>
                            </div>
                            <span style={{ fontSize: '32px', fontWeight: 'bold', color: '#ef4444' }}>
                                {stats.totalLostPets}
                            </span>
                        </div>
                        <h3 style={{ margin: 0, color: '#333' }}>Потерянных животных</h3>
                        <p style={{ color: '#666', marginTop: '5px' }}>Всего объявлений</p>
                    </div>

                    <div style={{
                        background: 'white',
                        borderRadius: '10px',
                        padding: '20px',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                            <div style={{
                                width: '50px',
                                height: '50px',
                                background: '#e0e7ff',
                                borderRadius: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <span style={{ fontSize: '24px' }}>🏪</span>
                            </div>
                            <span style={{ fontSize: '32px', fontWeight: 'bold', color: '#3b82f6' }}>
                                {stats.totalPetShops}
                            </span>
                        </div>
                        <h3 style={{ margin: 0, color: '#333' }}>Зоомагазинов</h3>
                        <p style={{ color: '#666', marginTop: '5px' }}>Партнеров</p>
                    </div>

                    <div style={{
                        background: 'white',
                        borderRadius: '10px',
                        padding: '20px',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                            <div style={{
                                width: '50px',
                                height: '50px',
                                background: '#dcfce7',
                                borderRadius: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <span style={{ fontSize: '24px' }}>👥</span>
                            </div>
                            <span style={{ fontSize: '32px', fontWeight: 'bold', color: '#22c55e' }}>
                                {stats.totalUsers}
                            </span>
                        </div>
                        <h3 style={{ margin: 0, color: '#333' }}>Пользователей</h3>
                        <p style={{ color: '#666', marginTop: '5px' }}>Зарегистрировано</p>
                    </div>

                    <div style={{
                        background: 'white',
                        borderRadius: '10px',
                        padding: '20px',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                            <div style={{
                                width: '50px',
                                height: '50px',
                                background: '#fef3c7',
                                borderRadius: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <span style={{ fontSize: '24px' }}>✨</span>
                            </div>
                            <span style={{ fontSize: '32px', fontWeight: 'bold', color: '#eab308' }}>
                                {stats.totalFoundPets}
                            </span>
                        </div>
                        <h3 style={{ margin: 0, color: '#333' }}>Найденных животных</h3>
                        <p style={{ color: '#666', marginTop: '5px' }}>Успешно возвращены</p>
                    </div>

                    <div style={{
                        background: 'white',
                        borderRadius: '10px',
                        padding: '20px',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                            <div style={{
                                width: '50px',
                                height: '50px',
                                background: '#ffe4e6',
                                borderRadius: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <span style={{ fontSize: '24px' }}>⚠️</span>
                            </div>
                            <span style={{ fontSize: '32px', fontWeight: 'bold', color: '#f97316' }}>
                                {stats.activeReports}
                            </span>
                        </div>
                        <h3 style={{ margin: 0, color: '#333' }}>Активных заявок</h3>
                        <p style={{ color: '#666', marginTop: '5px' }}>В поиске</p>
                    </div>

                    <div style={{
                        background: 'white',
                        borderRadius: '10px',
                        padding: '20px',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                            <div style={{
                                width: '50px',
                                height: '50px',
                                background: '#e9d5ff',
                                borderRadius: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <span style={{ fontSize: '24px' }}>✅</span>
                            </div>
                            <span style={{ fontSize: '32px', fontWeight: 'bold', color: '#a855f7' }}>
                                {stats.resolvedCases}
                            </span>
                        </div>
                        <h3 style={{ margin: 0, color: '#333' }}>Решенных случаев</h3>
                        <p style={{ color: '#666', marginTop: '5px' }}>Успешно закрыто</p>
                    </div>
                </div>

                <div style={{
                    background: 'white',
                    borderRadius: '10px',
                    padding: '20px',
                    marginBottom: '20px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                }}>
                    <h2 style={{ marginBottom: '15px', color: '#333' }}>Действия администратора</h2>
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                        <button style={{
                            padding: '10px 20px',
                            background: '#3b82f6',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}>
                            Экспорт статистики
                        </button>
                        <button style={{
                            padding: '10px 20px',
                            background: '#22c55e',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}>
                            Создать отчет
                        </button>
                        <button style={{
                            padding: '10px 20px',
                            background: '#a855f7',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}>
                            Обновить данные
                        </button>
                    </div>
                </div>

                <div style={{
                    background: 'white',
                    borderRadius: '10px',
                    padding: '20px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                }}>
                    <h2 style={{ marginBottom: '15px', color: '#333' }}>Статус платформы</h2>
                    <div style={{ display: 'grid', gap: '15px' }}>
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                                <span>Успешность возврата</span>
                                <span style={{ fontWeight: 'bold', color: '#22c55e' }}>
                                    {Math.round((stats.resolvedCases / (stats.totalLostPets + stats.totalFoundPets)) * 100)}%
                                </span>
                            </div>
                            <div style={{ background: '#e5e7eb', borderRadius: '10px', height: '8px', overflow: 'hidden' }}>
                                <div style={{
                                    width: `${Math.round((stats.resolvedCases / (stats.totalLostPets + stats.totalFoundPets)) * 100)}%`,
                                    background: '#22c55e',
                                    height: '100%'
                                }} />
                            </div>
                        </div>
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                                <span>Активность пользователей</span>
                                <span style={{ fontWeight: 'bold', color: '#3b82f6' }}>75%</span>
                            </div>
                            <div style={{ background: '#e5e7eb', borderRadius: '10px', height: '8px', overflow: 'hidden' }}>
                                <div style={{
                                    width: '75%',
                                    background: '#3b82f6',
                                    height: '100%'
                                }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}