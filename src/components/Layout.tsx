import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Flower2 } from 'lucide-react';

const navItems = [
  { path: '/', label: '首页' },
  { path: '/project', label: '项目介绍' },
  { path: '/technology', label: '技术展示' },
  { path: '/team', label: '团队介绍' },
  { path: '/achievements', label: '成果荣誉' },
  { path: '/contact', label: '联系我们' },
];

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 overflow-x-hidden">
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-stone-50/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
                <Flower2 className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg lg:text-xl font-bold text-emerald-800">
                  花韵珍鲜
                </span>
                <span className="text-xs text-emerald-600 hidden lg:block">生态品牌计划 · 乡土珍品焕新</span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-emerald-700'
                      : 'text-stone-600 hover:text-emerald-600'
                  }`}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-emerald-500 rounded-full"
                      layoutId="navIndicator"
                    />
                  )}
                </Link>
              ))}
            </nav>

            <button
              className="lg:hidden p-2 text-stone-600 hover:text-emerald-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden bg-stone-50 border-b border-stone-200"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <nav className="px-4 py-4 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'text-stone-600 hover:bg-stone-100 hover:text-emerald-600'
                    }`}
                  >
                    {item.label}
                    <ChevronRight size={16} className={location.pathname === item.path ? 'text-emerald-500' : 'text-stone-400'} />
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <main className="pt-16 lg:pt-20">
        <Outlet />
      </main>

      <footer className="bg-emerald-900 text-emerald-50">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-8 lg:py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-emerald-700 flex items-center justify-center">
                  <Flower2 className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-bold text-white">花韵珍鲜</span>
              </div>
              <p className="text-emerald-200 text-sm leading-relaxed">
                让每一朵山花、一味珍鲜，成为京郊振兴的金色名片
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">快速链接</h4>
              <ul className="space-y-2">
                {navItems.slice(0, 4).map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="text-emerald-200 hover:text-white text-sm transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">联系方式</h4>
              <p className="text-emerald-200 text-sm">邮箱：team@huayunzhenxian.com</p>
              <p className="text-emerald-200 text-sm mt-2">地址：京郊生态产业园</p>
            </div>
          </div>
          <div className="border-t border-emerald-800 mt-8 pt-8 text-center">
            <p className="text-emerald-300 text-sm">
              © 2024 花韵珍鲜团队. 保留所有权利.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
