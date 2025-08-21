"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Calculator, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FormData {
  units: "metric" | "imperial";
  sex: "male" | "female";
  height: string;
  weight: string;
  chest: string;
  waist: string;
  hips: string;
  shoulders: string;
  age: string;
}

interface BodyTypeResult {
  bmi: number;
  waistHipRatio: number;
  bodyType: string;
  recommendations: string[];
  clothingTips: string[];
}

const bodyTypeData = {
  male: {
    rectangle: {
      name: "Rectangle",
      description: "Balanced proportions with similar chest, waist, and hip measurements",
      recommendations: [
        "Fitted t-shirts and polos",
        "Structured blazers",
        "Straight-leg jeans",
        "Layered outfits"
      ],
      tips: [
        "Add visual interest with patterns and textures",
        "Create definition with belts",
        "Layer to add dimension"
      ]
    },
    triangle: {
      name: "Triangle (Pear)",
      description: "Hips wider than chest and shoulders",
      recommendations: [
        "Horizontal striped tops",
        "Structured shoulders",
        "Dark bottom pieces",
        "Statement accessories"
      ],
      tips: [
        "Draw attention upward",
        "Balance proportions with shoulder details",
        "Avoid tight-fitting bottoms"
      ]
    },
    invertedTriangle: {
      name: "Inverted Triangle",
      description: "Broad shoulders and chest, narrow hips",
      recommendations: [
        "V-neck shirts",
        "Slim-fit bottoms",
        "Light-colored pants",
        "Minimal shoulder details"
      ],
      tips: [
        "Balance broad shoulders",
        "Add volume to lower body",
        "Avoid shoulder pads"
      ]
    },
    oval: {
      name: "Oval (Apple)",
      description: "Fuller midsection with narrower hips and shoulders",
      recommendations: [
        "Open necklines",
        "Empire waist shirts",
        "Straight-leg pants",
        "Vertical stripes"
      ],
      tips: [
        "Create vertical lines",
        "Avoid tight waistlines",
        "Draw attention to face and legs"
      ]
    }
  },
  female: {
    hourglass: {
      name: "Hourglass",
      description: "Balanced bust and hips with a defined waist",
      recommendations: [
        "Wrap dresses",
        "High-waisted bottoms",
        "Fitted tops",
        "Belted outfits"
      ],
      tips: [
        "Emphasize your waist",
        "Show off your curves",
        "Avoid boxy silhouettes"
      ]
    },
    pear: {
      name: "Pear",
      description: "Hips wider than bust with a defined waist",
      recommendations: [
        "A-line dresses",
        "Boat neck tops",
        "Dark bottoms",
        "Statement earrings"
      ],
      tips: [
        "Balance your proportions",
        "Highlight your upper body",
        "Create curves on top"
      ]
    },
    apple: {
      name: "Apple",
      description: "Fuller bust and midsection with narrower hips",
      recommendations: [
        "Empire waist dresses",
        "V-neck tops",
        "Straight-leg jeans",
        "Long cardigans"
      ],
      tips: [
        "Create a defined waistline",
        "Show off your legs",
        "Avoid clingy fabrics"
      ]
    },
    rectangle: {
      name: "Rectangle",
      description: "Similar measurements for bust, waist, and hips",
      recommendations: [
        "Peplum tops",
        "Ruffled details",
        "Cropped jackets",
        "Textured fabrics"
      ],
      tips: [
        "Create curves with details",
        "Add volume strategically",
        "Use belts to define waist"
      ]
    }
  }
};

export default function BodyTypeForm() {
  const [formData, setFormData] = useState<FormData>({
    units: "metric",
    sex: "male",
    height: "",
    weight: "",
    chest: "",
    waist: "",
    hips: "",
    shoulders: "",
    age: ""
  });

  const [result, setResult] = useState<BodyTypeResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const calculateBodyType = () => {
    setIsCalculating(true);
    
    setTimeout(() => {
      const height = parseFloat(formData.height) / 100;
      const weight = parseFloat(formData.weight);
      const chest = parseFloat(formData.chest);
      const waist = parseFloat(formData.waist);
      const hips = parseFloat(formData.hips);

      const bmi = weight / (height * height);

      const waistHipRatio = waist / hips;

      let bodyType = "";
      let bodyTypeKey = "";

      if (formData.sex === "male") {
        if (Math.abs(chest - waist) <= 5 && Math.abs(waist - hips) <= 5) {
          bodyType = "Rectangle";
          bodyTypeKey = "rectangle";
        } else if (hips > chest && hips > waist) {
          bodyType = "Triangle";
          bodyTypeKey = "triangle";
        } else if (chest > hips && chest > waist) {
          bodyType = "Inverted Triangle";
          bodyTypeKey = "invertedTriangle";
        } else {
          bodyType = "Oval";
          bodyTypeKey = "oval";
        }
      } else {
        if (waistHipRatio <= 0.8 && Math.abs(chest - hips) <= 5) {
          bodyType = "Hourglass";
          bodyTypeKey = "hourglass";
        } else if (hips > chest) {
          bodyType = "Pear";
          bodyTypeKey = "pear";
        } else if (chest > hips || waist >= chest * 0.9) {
          bodyType = "Apple";
          bodyTypeKey = "apple";
        } else {
          bodyType = "Rectangle";
          bodyTypeKey = "rectangle";
        }
      }

      const bodyTypeInfo = bodyTypeData[formData.sex][bodyTypeKey as keyof typeof bodyTypeData.male];

      setResult({
        bmi: Math.round(bmi * 10) / 10,
        waistHipRatio: Math.round(waistHipRatio * 100) / 100,
        bodyType,
        recommendations: bodyTypeInfo.recommendations,
        clothingTips: bodyTypeInfo.tips
      });

      setIsCalculating(false);
    }, 1500);
  };

  const isFormValid = formData.height && formData.weight && formData.chest && formData.waist && formData.hips;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1122] via-[#2c1b3a] to-[#1a1122] p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl">
              <Calculator className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500">
              Body Type Analyzer
            </h1>
          </div>
          <p className="text-gray-300 text-lg">
            Discover your body type and get personalized fashion recommendations ✨
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-[#242131]/80 backdrop-blur-sm border-purple-500/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-pink-400" />
                  Your Measurements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Units and Sex */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Units
                    </label>
                    <select
                      value={formData.units}
                      onChange={(e) => handleInputChange("units", e.target.value)}
                      className="w-full p-3 bg-[#3a344a] border border-purple-500/30 rounded-xl text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    >
                      <option value="metric">Metric (cm, kg)</option>
                      <option value="imperial">Imperial (in, lbs)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Sex
                    </label>
                    <select
                      value={formData.sex}
                      onChange={(e) => handleInputChange("sex", e.target.value)}
                      className="w-full p-3 bg-[#3a344a] border border-purple-500/30 rounded-xl text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>

                {/* Height and Weight */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Height ({formData.units === "metric" ? "cm" : "in"})
                    </label>
                    <input
                      type="number"
                      value={formData.height}
                      onChange={(e) => handleInputChange("height", e.target.value)}
                      placeholder="170"
                      className="w-full p-3 bg-[#3a344a] border border-purple-500/30 rounded-xl text-white placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Weight ({formData.units === "metric" ? "kg" : "lbs"})
                    </label>
                    <input
                      type="number"
                      value={formData.weight}
                      onChange={(e) => handleInputChange("weight", e.target.value)}
                      placeholder="70"
                      className="w-full p-3 bg-[#3a344a] border border-purple-500/30 rounded-xl text-white placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    />
                  </div>
                </div>

                {/* Chest and Waist */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Chest ({formData.units === "metric" ? "cm" : "in"})
                    </label>
                    <input
                      type="number"
                      value={formData.chest}
                      onChange={(e) => handleInputChange("chest", e.target.value)}
                      placeholder="95"
                      className="w-full p-3 bg-[#3a344a] border border-purple-500/30 rounded-xl text-white placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Waist ({formData.units === "metric" ? "cm" : "in"})
                    </label>
                    <input
                      type="number"
                      value={formData.waist}
                      onChange={(e) => handleInputChange("waist", e.target.value)}
                      placeholder="80"
                      className="w-full p-3 bg-[#3a344a] border border-purple-500/30 rounded-xl text-white placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    />
                  </div>
                </div>

                {/* Hips and Shoulders */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Hips ({formData.units === "metric" ? "cm" : "in"})
                    </label>
                    <input
                      type="number"
                      value={formData.hips}
                      onChange={(e) => handleInputChange("hips", e.target.value)}
                      placeholder="95"
                      className="w-full p-3 bg-[#3a344a] border border-purple-500/30 rounded-xl text-white placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Shoulders ({formData.units === "metric" ? "cm" : "in"}) <span className="text-gray-500">optional</span>
                    </label>
                    <input
                      type="number"
                      value={formData.shoulders}
                      onChange={(e) => handleInputChange("shoulders", e.target.value)}
                      placeholder="45"
                      className="w-full p-3 bg-[#3a344a] border border-purple-500/30 rounded-xl text-white placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    />
                  </div>
                </div>

                {/* Age */}
                <div className="w-1/2">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Age <span className="text-gray-500">optional</span>
                  </label>
                  <input
                    type="number"
                    value={formData.age}
                    onChange={(e) => handleInputChange("age", e.target.value)}
                    placeholder="25"
                    className="w-full p-3 bg-[#3a344a] border border-purple-500/30 rounded-xl text-white placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  onClick={calculateBodyType}
                  disabled={!isFormValid || isCalculating}
                  className="w-full py-4 text-lg font-semibold bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
                >
                  {isCalculating ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Analyzing Your Body Type...
                    </div>
                  ) : (
                    <>
                      <TrendingUp className="w-5 h-5 mr-2" />
                      Get My Body Type
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            {result ? (
              <Card className="bg-[#242131]/80 backdrop-blur-sm border-green-500/20 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex items-center gap-2">
                    <Sparkles className="w-6 h-6 text-green-400" />
                    Your Results
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#3a344a]/50 p-4 rounded-xl">
                      <p className="text-sm text-gray-400">BMI</p>
                      <p className="text-2xl font-bold text-blue-400">{result.bmi}</p>
                    </div>
                    <div className="bg-[#3a344a]/50 p-4 rounded-xl">
                      <p className="text-sm text-gray-400">Waist-Hip Ratio</p>
                      <p className="text-2xl font-bold text-purple-400">{result.waistHipRatio}</p>
                    </div>
                  </div>

                  {/* Body Type */}
                  <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 p-6 rounded-xl border border-green-500/30">
                    <h3 className="text-xl font-bold text-green-400 mb-2">
                      Body Type: {result.bodyType}
                    </h3>
                    <p className="text-gray-300">
                      {bodyTypeData[formData.sex][result.bodyType.toLowerCase().replace(" ", "") as keyof typeof bodyTypeData.male]?.description}
                    </p>
                  </div>

                  {/* Recommendations */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">
                      🔥 Recommended Clothing
                    </h4>
                    <ul className="space-y-2">
                      {result.recommendations.map((rec, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-300">
                          <div className="w-2 h-2 bg-pink-400 rounded-full" />
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tips */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">
                      💡 Styling Tips
                    </h4>
                    <ul className="space-y-2">
                      {result.clothingTips.map((tip, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-300">
                          <div className="w-2 h-2 bg-purple-400 rounded-full" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-[#242131]/80 backdrop-blur-sm border-gray-500/20 shadow-2xl">
                <CardContent className="flex flex-col items-center justify-center h-96 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-pink-500/20 to-purple-600/20 rounded-full flex items-center justify-center mb-6">
                    <Calculator className="w-12 h-12 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-300 mb-2">
                    Ready to Discover Your Style?
                  </h3>
                  <p className="text-gray-500">
                    Fill in your measurements to get personalized fashion recommendations
                  </p>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}