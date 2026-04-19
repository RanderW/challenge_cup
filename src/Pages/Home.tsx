import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Leaf, Heart, Truck } from 'lucide-react';

const banners = [
  {
    id: 1,
    title: '花韵珍鲜',
    subtitle: '生态品牌计划 · 乡土珍品焕新',
    description: '让每一朵山花、一味珍鲜，成为京郊振兴的金色名片',
  },
  {
    id: 2,
    title: '四海甄选',
    subtitle: '京郊焕新',
    description: '精选优质农产品，传承乡土匠心',
  },
  {
    id: 3,
    title: '自然馈赠',
    subtitle: '原生态 · 高品质',
    description: '从田间到餐桌，守护每一份新鲜',
  },
];

const highlights = [
  { icon: Leaf, title: '原生态', desc: '天然种植养殖' },
  { icon: Heart, title: '手工制作', desc: '传统匠心工艺' },
  { icon: Truck, title: '产地直供', desc: '从田间到餐桌' },
  { icon: Leaf, title: '绿色健康', desc: '无添加更安心' },
];

export default function Home() {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextBanner = () => setCurrentBanner((prev) => (prev + 1) % banners.length);
  const prevBanner = () => setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);

  return (
    <div className="w-full">
      <section className="relative h-[500px] lg:h-[600px] overflow-hidden">
        {banners.map((banner, index) => (
          <motion.div
            key={banner.id}
            className={`absolute inset-0 flex items-center justify-center ${
              index === currentBanner ? 'z-10' : 'z-0'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentBanner ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-green-50 to-orange-50" />
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
              <motion.p
                className="text-green-700 text-sm lg:text-base font-medium mb-4 tracking-wider"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: index === currentBanner ? 0 : 20, opacity: index === currentBanner ? 1 : 0 }}
                transition={{ delay: 0.2 }}
              >
                {banner.subtitle}
              </motion.p>
              <motion.h1
                className="text-4xl lg:text-6xl xl:text-7xl font-bold text-amber-800 mb-6"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: index === currentBanner ? 0 : 30, opacity: index === currentBanner ? 1 : 0 }}
                transition={{ delay: 0.3 }}
              >
                {banner.title}
              </motion.h1>
              <motion.p
                className="text-amber-700 text-base lg:text-lg max-w-2xl mx-auto"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: index === currentBanner ? 0 : 30, opacity: index === currentBanner ? 1 : 0 }}
                transition={{ delay: 0.4 }}
              >
                {banner.description}
              </motion.p>
            </div>
          </motion.div>
        ))}

        <button
          onClick={prevBanner}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 hover:bg-white transition-colors shadow-md"
        >
          <ChevronLeft className="w-6 h-6 text-amber-800" />
        </button>
        <button
          onClick={nextBanner}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 hover:bg-white transition-colors shadow-md"
        >
          <ChevronRight className="w-6 h-6 text-amber-800" />
        </button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentBanner ? 'bg-green-600 w-6' : 'bg-amber-400'
              }`}
            />
          ))}
        </div>
      </section>

      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 xl:px-12 bg-amber-50/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-amber-800 mb-4">
              品牌特色
            </h2>
            <p className="text-green-700 text-lg lg:text-xl font-medium">
              "让每一朵山花、一味珍鲜，成为京郊振兴的金色名片"
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                className="group relative p-6 rounded-xl bg-white border border-amber-200 hover:border-green-400 transition-all duration-300 shadow-sm hover:shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-100 to-amber-100 flex items-center justify-center mb-4 group-hover:from-green-200 group-hover:to-amber-200 transition-all">
                  <item.icon className="w-6 h-6 text-green-700" />
                </div>
                <h3 className="text-amber-800 font-semibold mb-2">{item.title}</h3>
                <p className="text-amber-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
