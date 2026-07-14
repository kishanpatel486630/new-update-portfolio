import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiAcademicCap } from "react-icons/hi";
import { education } from "../data/portfolio";
import SectionHeading from "./ui/SectionHeading";
import Card from "./ui/Card";
import { StaggerContainer, StaggerItem } from "./motion/StaggerContainer";

const TABS = ["All", "Education", "Certifications"];

export default function Education() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredEducation = education.filter((item) => {
    if (activeTab === "All") return true;
    return item.category === activeTab;
  });

  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Education & Certifications"
          subtitle="Academic foundations and continuous learning that shape my design practice."
        />

        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center p-1.5 glass rounded-2xl relative">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative z-10 px-6 py-2.5 text-sm font-semibold transition-colors duration-300 rounded-xl ${
                  activeTab === tab
                    ? "text-white"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="active-education-tab"
                    className="absolute inset-0 bg-gradient-to-r from-gradient-start to-gradient-end rounded-xl -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {tab}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
              {filteredEducation.map((edu, i) => (
                <StaggerItem key={edu.degree}>
                  <Card
                    glowColor={
                      i % 3 === 0 ? "blue" : i % 3 === 1 ? "purple" : "cyan"
                    }
                    className="p-6 md:p-8 h-full group"
                  >
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gradient-start/20 to-gradient-end/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      <HiAcademicCap className="text-gradient-end" size={24} />
                    </div>

                    {/* Period */}
                    <span className="text-xs text-gradient-end font-semibold uppercase tracking-wider">
                      {edu.period}
                    </span>

                    {/* Degree */}
                    <h3 className="text-lg font-bold mt-2 mb-1 group-hover:text-gradient-end transition-colors duration-300">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-text-secondary mb-1">
                      {edu.field}
                    </p>
                    <p className="text-xs text-text-muted mb-4">
                      {edu.institution} · {edu.location}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-text-muted leading-relaxed mb-4">
                      {edu.description}
                    </p>

                    {/* Achievements */}
                    {edu.achievements.length > 0 && (
                      <div className="pt-4 border-t border-border space-y-2">
                        {edu.achievements.map((a) => (
                          <div key={a} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-gradient-end mt-1.5 flex-shrink-0" />
                            <span className="text-xs text-text-secondary">
                              {a}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {filteredEducation.length === 0 && (
              <div className="text-center py-16 text-text-secondary">
                <p>No education items found for {activeTab}.</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
