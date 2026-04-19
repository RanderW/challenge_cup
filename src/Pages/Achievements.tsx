import React from 'react';
import { motion } from 'framer-motion';
import { Award, Leaf, Newspaper, Sprout, MapPin, Heart } from 'lucide-react';

const certifications = [
  { title: '有机产品认证', level: '国家级', year: '2024' },
  { title: '地理标志保护', level: '省级', year: '2024' },
  { title: '绿色食品认证', level: 'A级', year: '2023' },
  { title: '无公害农产品', level: '认证', year: '2023' },
];

const honors = [
  { name: '乡村振兴示范产品', type: '荣誉称号', status: '已授予' },
  { name: '助农先锋品牌', type: '行业荣誉', status: '已授予' },
  { name: '消费者信赖品牌', type: '市场认可', status: '已授予' },
];

const reports = ['助农日报', '乡村振兴网', '农民日报', '央视农业', '新华网三农'];

const stats = [
  { icon: Award, value: '12', label: '认证资质' },
  { icon: Leaf, value: '8', label: '合作基地' },
  { icon: Newspaper, value: '25', label: '助农报道' },
  { icon: Heart, value: '3', label: '省级荣誉' },
];

export default function Achievements() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">品质认证</h1>
          <p className="text-amber-700 text-lg">每一份荣誉都是对品质的认可</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 text-center shadow-lg border border-amber-100"
            >
              <stat.icon className="w-8 h-8 text-amber-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-amber-900 mb-1">{stat.value}</div>
              <div className="text-amber-700 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-bold text-amber-900 mb-8 flex items-center">
            <Award className="w-6 h-6 text-amber-600 mr-3" />
            产品认证
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border-2 border-amber-200 hover:border-amber-400 transition-colors"
              >
                <div className="aspect-[3/4] bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg mb-4 flex items-center justify-center">
                  <Sprout className="w-16 h-16 text-amber-600/50" />
                </div>
                <h3 className="text-amber-900 font-semibold mb-2">{cert.title}</h3>
                <div className="flex justify-between text-sm">
                  <span className="text-amber-700">{cert.level}</span>
                  <span className="text-amber-500">{cert.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-bold text-amber-900 mb-8 flex items-center">
            <MapPin className="w-6 h-6 text-amber-600 mr-3" />
            品牌荣誉
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {honors.map((honor, index) => (
              <motion.div
                key={honor.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-amber-200 hover:border-amber-400 transition-colors"
              >
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-amber-900 font-semibold mb-2">{honor.name}</h3>
                <div className="flex justify-between text-sm">
                  <span className="text-amber-700">{honor.type}</span>
                  <span className="text-green-600">{honor.status}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-amber-900 mb-8 flex items-center">
            <Newspaper className="w-6 h-6 text-amber-600 mr-3" />
            助农报道
          </h2>
          <div className="flex overflow-x-auto pb-4 gap-6 scrollbar-thin">
            {reports.map((report, index) => (
              <motion.div
                key={report}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 w-40 h-24 bg-white rounded-lg border border-amber-200 flex items-center justify-center hover:border-amber-400 transition-colors shadow-md"
              >
                <span className="text-amber-800 font-medium">{report}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
