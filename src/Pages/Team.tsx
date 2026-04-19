import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Heart, Truck, Sprout, Sun, Gift } from 'lucide-react';

const teamMembers = [
  {
    name: '张大山',
    role: '创始人',
    icon: Sun,
    desc: '深耕农业二十载，致力于将家乡优质农产品带给千家万户',
    seed: 'farmer1',
  },
  {
    name: '李秀兰',
    role: '品控师',
    icon: Heart,
    desc: '严格把控每一道品质关卡，确保每一份产品都新鲜优质',
    seed: 'farmer2',
  },
  {
    name: '王小明',
    role: '运营总监',
    icon: Truck,
    desc: '打通城乡供应链，让新鲜从田间直达餐桌',
    seed: 'farmer3',
  },
  {
    name: '陈老农',
    role: '农技顾问',
    icon: Sprout,
    desc: '传承传统种植智慧，指导生态有机种植技术',
    seed: 'farmer4',
  },
  {
    name: '赵小花',
    role: '产品经理',
    icon: Gift,
    desc: '挖掘乡土特色，打造独具匠心的农产品礼盒',
    seed: 'farmer5',
  },
  {
    name: '刘志强',
    role: '品宣专员',
    icon: Leaf,
    desc: '讲述乡村故事，传播乡土文化，让更多人爱上家乡味道',
    seed: 'farmer6',
  },
];

export default function Team() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50">
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-green-200/30 rounded-full -translate-x-16 -translate-y-16" />
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-amber-200/30 rounded-full translate-x-24 translate-y-24" />
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 mb-4">
              <Leaf className="w-5 h-5 text-green-600" />
              <span className="text-green-700 font-medium">新农人团队</span>
              <Leaf className="w-5 h-5 text-green-600" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-stone-800 mb-4">
              乡土守护者
            </h1>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              一群热爱土地的青年，用匠心守护每一份来自田野的馈赠
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-stone-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <member.icon className="w-4 h-4 text-green-600" />
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-100 to-green-100 overflow-hidden border-4 border-white shadow-md mb-4">
                    <img
                      src={`https://api.dicebear.com/7.x/notionists/svg?seed=${member.seed}`}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-stone-800 mb-1">
                    {member.name}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full mb-3">
                    {member.role}
                  </span>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    {member.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
