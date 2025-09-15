import { ScrollBackground } from '@/components/ScrollBackground';
import GlassCard from '@/components/ui/GlassCard';

export default function Home() {
  return (
    <ScrollBackground>
      {/* Section 1 */}
      <div className="h-screen flex items-center justify-center p-12 pt-24">
        <GlassCard className="p-8 md:p-12 lg:p-16 text-center shadow-2xl w-[calc(100vw-4rem)] max-w-7xl h-[calc(100vh-4rem)]">
          <div className="flex flex-col justify-center h-full">
            <h1 className="text-6xl font-black text-white mb-4 tracking-tight">
              Coffee Point
            </h1>
            <p className="text-white/80 text-xl">
              Scroll to see gradient changes
            </p>
          </div>
        </GlassCard>
      </div>

      {/* Section 2 */}
      <div className="h-screen flex items-center justify-center p-12 pt-24">
        <GlassCard className="p-8 md:p-12 lg:p-16 text-center shadow-2xl w-[calc(100vw-4rem)] max-w-7xl h-[calc(100vh-4rem)]">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-5xl font-bold text-white mb-4">
              About Coffee Point
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Professional management system for modern coffee shops
            </p>
          </div>
        </GlassCard>
      </div>

      {/* Section 3 */}
      <div className="h-screen flex items-center justify-center p-12 pt-24">
        <GlassCard className="p-8 md:p-12 lg:p-16 text-center shadow-2xl w-[calc(100vw-4rem)] max-w-7xl h-[calc(100vh-4rem)]">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-5xl font-bold text-white mb-4">
              Features
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Everything you need to run your coffee business efficiently
            </p>
          </div>
        </GlassCard>
      </div>

      {/* Section 4 */}
      <div className="h-screen flex items-center justify-center p-12 pt-24">
        <GlassCard className="p-8 md:p-12 lg:p-16 text-center shadow-2xl w-[calc(100vw-4rem)] max-w-7xl h-[calc(100vh-4rem)]">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-5xl font-bold text-white mb-4">
              Pricing
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Simple and transparent pricing for every business size
            </p>
          </div>
        </GlassCard>
      </div>

      {/* Section 5 */}
      <div className="h-screen flex items-center justify-center p-12 pt-24">
        <GlassCard className="p-8 md:p-12 lg:p-16 text-center shadow-2xl w-[calc(100vw-4rem)] max-w-7xl h-[calc(100vh-4rem)]">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-5xl font-bold text-white mb-4">
              Get Started
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Join hundreds of coffee shops using Coffee Point
            </p>
          </div>
        </GlassCard>
      </div>
    </ScrollBackground>
  );
}
