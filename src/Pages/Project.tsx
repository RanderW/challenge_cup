import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, AlertCircle, ShoppingCart, Truck, Award, TrendingUp, Package } from 'lucide-react';

const painPoints = [
  { icon: AlertCircle, title: '销路不畅', desc: '优质农产品缺乏销售渠道，只能低价卖给中间商' },
  { icon: AlertCircle, title: '品牌缺失', desc: '没有统一品牌形象，产品附加值低' },
  { icon: AlertCircle, title: '物流困难', desc: '冷链物流不完善，新鲜度难以保证' },
];

const solutions = [
  { step: 1, title: '电商赋能', desc: '搭建线上销售平台，直连消费者', icon: ShoppingCart },
  { step: 2, title: '品牌打造', desc: '统一包装设计，提升产品溢价', icon: Package },
  { step: 3, title: '物流升级', desc: '建设冷链仓储，保证新鲜送达', icon: Truck },
  { step: 4, title: '产业振兴', desc: '带动农户增收，助力乡村振兴', icon: TrendingUp },
];

export default function Project() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50">
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-100/50 to-transparent" />
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-12 h-px bg-green-600" />
              <Sprout className="w-6 h-6 text-green-600" />
              <div className="w-12 h-px bg-green-600" />
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold text-amber-900 mb-6">
              乡土故事
            </h1>
            <p className="text-amber-800/70 text-lg leading-relaxed">
              从田间到餐桌，我们致力于让每一份乡土珍品都能找到懂它的人。
              通过电商助农，让优质农产品走出大山，让农户的辛勤劳动获得应有回报。
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl lg:text-4xl font-bold text-amber-900 mb-4">传统困境</h2>
            <p className="text-amber-800/60">农产品销售面临的三大难题</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/80 border border-amber-200 rounded-2xl p-6 hover:border-green-400/50 transition-colors shadow-sm"
              >
                <point.icon className="w-10 h-10 text-amber-600 mb-4" />
                <h3 className="text-xl font-semibold text-amber-900 mb-2">{point.title}</h3>
                <p className="text-amber-800/60 text-sm">{point.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-gradient-to-b from-green-50/50 to-amber-50/30">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl lg:text-4xl font-bold text-amber-900 mb-4">助农方案</h2>
            <p className="text-amber-800/60">四步实现农产品价值提升</p>
          </motion.div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {solutions.map((sol, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative"
                >
                  <div className="bg-white border border-green-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-sm">
                        {sol.step}
                      </div>
                      <sol.icon className="w-5 h-5 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-amber-900 mb-2">{sol.title}</h3>
                    <p className="text-amber-800/60 text-sm">{sol.desc}</p>
                  </div>
                  {index < solutions.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-green-300" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
