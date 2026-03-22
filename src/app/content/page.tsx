"use client";

import { useState, useEffect } from "react";
import Modal from "react-modal";
import Head from "next/head";
import Link from "next/link";

interface StudentInfo {
    fullName: string;
    group: string;

    brigade: string;

}

export default function ContentPage() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [studentInfo] = useState<StudentInfo>({
        fullName: "Агапов И.Е.",
        group: "22ВВП2",
        brigade: "Бригада №4",
    });

    useEffect(() => {
        setIsMounted(true);
        // Устанавливаем корневой элемент только после монтирования
        if (typeof window !== "undefined") {
            const rootElement = document.getElementById("__next") || document.body;
            Modal.setAppElement(rootElement);
        }
    }, []);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    // Не рендерим модальное окно до монтирования
    if (!isMounted) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
                <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">Загрузка...</p>
                </div>
            </div>
        );
    }

    return (
        <>
            <Head>
                <title>Информация о студенте - Petto</title>
                <meta name="description" content="Информация о студенте, бригаде и варианте" />
            </Head>

            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
                {/* Навигация */}
                <nav className="bg-white dark:bg-gray-800 shadow-md">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        <div className="flex justify-between items-center">
                            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                                Информация о студенте
                            </h1>
                            <Link
                                href="/"
                                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                            >
                                ← На главную
                            </Link>
                        </div>
                    </div>
                </nav>

                {/* Основной контент */}
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                            Лабораторная работа №1
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300">
                            NextJS - модальное окно с информацией о студенте
                        </p>
                    </div>

                    {/* Карточка с информацией */}
                    <div className="max-w-2xl mx-auto">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-8">
                                <h3 className="text-2xl font-bold text-white text-center">
                                    Информация о студенте
                                </h3>
                            </div>

                            <div className="p-8">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 p-4 bg-blue-50 dark:bg-gray-700 rounded-lg">
                                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Фамилия Имя Отчество</p>
                                            <p className="text-lg font-semibold text-gray-800 dark:text-white">{studentInfo.fullName}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 p-4 bg-green-50 dark:bg-gray-700 rounded-lg">
                                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Группа</p>
                                            <p className="text-lg font-semibold text-gray-800 dark:text-white">{studentInfo.group}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 p-4 bg-purple-50 dark:bg-gray-700 rounded-lg">
                                        <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Бригада</p>
                                            <p className="text-lg font-semibold text-gray-800 dark:text-white">{studentInfo.brigade}</p>
                                        </div>
                                    </div>



                                </div>

                                <div className="mt-8 text-center">
                                    <button
                                        onClick={openModal}
                                        className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-semibold text-lg shadow-md"
                                    >
                                        Показать детальную информацию
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                {/* Модальное окно с детальной информацией */}
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Детальная информация о студенте"
                    ariaHideApp={false}
                    style={{
                        overlay: {
                            backgroundColor: 'rgba(0, 0, 0, 0.75)',
                            zIndex: 1000
                        },
                        content: {
                            top: '50%',
                            left: '50%',
                            right: 'auto',
                            bottom: 'auto',
                            marginRight: '-50%',
                            transform: 'translate(-50%, -50%)',
                            maxWidth: '500px',
                            width: '90%',
                            padding: '0',
                            borderRadius: '16px',
                            border: 'none',
                            overflow: 'hidden'
                        }
                    }}
                >
                    <div className="bg-white dark:bg-gray-800">
                        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-4">
                            <div className="flex justify-between items-center">
                                <h2 className="text-2xl font-bold text-white">
                                    Детальная информация
                                </h2>
                                <button
                                    onClick={closeModal}
                                    className="text-white hover:text-gray-200 transition-colors"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="p-6">
                            <div className="space-y-4">
                                <div className="border-b border-gray-200 dark:border-gray-700 pb-3">
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Фамилия Имя Отчество</p>
                                    <p className="text-lg font-semibold text-gray-800 dark:text-white">{studentInfo.fullName}</p>
                                </div>

                                <div className="border-b border-gray-200 dark:border-gray-700 pb-3">
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Группа</p>
                                    <p className="text-lg font-semibold text-gray-800 dark:text-white">{studentInfo.group}</p>
                                </div>

                                <div className="border-b border-gray-200 dark:border-gray-700 pb-3">
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Бригада</p>
                                    <p className="text-lg font-semibold text-gray-800 dark:text-white">{studentInfo.brigade}</p>
                                </div>


                            </div>

                            <div className="mt-6 flex justify-end">
                                <button
                                    onClick={closeModal}
                                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                                >
                                    Закрыть
                                </button>
                            </div>
                        </div>
                    </div>
                </Modal>

                {/* Футер */}
                <footer className="bg-white dark:bg-gray-800 shadow-md mt-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-600 dark:text-gray-400">
                        Лабораторная работа №1 - NextJS, Вариант №4 (Модальное окно)
                    </div>
                </footer>
            </div>
        </>
    );
}