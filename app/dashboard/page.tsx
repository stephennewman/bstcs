import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | NEWMAN INTELLIGENCE",
  description: "Modern SaaS dashboard for financial management and analytics.",
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex" style={{ 
      background: 'linear-gradient(135deg, #0F0F0F 0%, #1A1A1A 25%, #2A2A2A 50%, #1F1F1F 75%, #0A0A0A 100%)'
    }}>
      {/* Sidebar Navigation */}
      <aside className="w-16 sm:w-20 flex flex-col items-center py-6" style={{ backgroundColor: '#1A1A1A' }}>
        <div className="space-y-6">
          {/* Dashboard Icon */}
          <div className="w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors" style={{ backgroundColor: '#41ab5d' }}>
            <span className="text-white text-lg">📊</span>
          </div>
          
          {/* Analytics Icon */}
          <div className="w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors" style={{ backgroundColor: '#2A2A2A' }}>
            <span className="text-gray-400 text-lg">📈</span>
          </div>
          
          {/* Documents Icon */}
          <div className="w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors" style={{ backgroundColor: '#2A2A2A' }}>
            <span className="text-gray-400 text-lg">📄</span>
          </div>
          
          {/* Settings Icon */}
          <div className="w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors" style={{ backgroundColor: '#2A2A2A' }}>
            <span className="text-gray-400 text-lg">⚙️</span>
          </div>
          
          {/* Profile Icon */}
          <div className="w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors" style={{ backgroundColor: '#2A2A2A' }}>
            <span className="text-gray-400 text-lg">👤</span>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation Bar */}
        <header className="px-6 py-4 flex items-center justify-between" style={{ backgroundColor: '#1A1A1A' }}>
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold text-white">NEWMAN INTELLIGENCE</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search" 
                className="w-64 px-4 py-2 rounded-lg text-sm" 
                style={{ backgroundColor: '#2A2A2A', color: '#FFFFFF', border: '1px solid #404040' }}
              />
              <span className="absolute right-3 top-2.5 text-xs text-gray-400">⌘ + F</span>
            </div>
            
            {/* Action Buttons */}
            <button className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors" style={{ backgroundColor: '#2A2A2A' }}>
              <span className="text-gray-400 text-sm">🌙</span>
            </button>
            
            <button className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors" style={{ backgroundColor: '#2A2A2A' }}>
              <span className="text-gray-400 text-sm">🔔</span>
            </button>
            
            <button className="px-4 py-2 rounded-lg text-sm font-medium text-white hover:bg-gray-700 transition-colors" style={{ backgroundColor: '#2A2A2A' }}>
              Export Data
            </button>
            
            <button className="px-4 py-2 rounded-lg text-sm font-medium text-white hover:bg-gray-700 transition-colors" style={{ backgroundColor: '#2A2A2A' }}>
              Share
            </button>
          </div>
        </header>

        {/* Main Dashboard Content */}
        <main className="px-6 py-8 flex-1">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              Good Morning Stephen
            </h1>
            <p className="text-lg text-gray-400">
              Here's what's happening with your business today
            </p>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Total Balance Card */}
            <div className="p-6 rounded-2xl" style={{ 
              background: 'linear-gradient(45deg, #2A2A2A 0%, #3A3A3A 100%)'
            }}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-400">Total Balance</h3>
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#41ab5d' }}>
                  <span className="text-white text-sm">💰</span>
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">$931.52M</div>
              <div className="flex items-center text-sm">
                <span className="text-green-400 font-semibold">+26.2%</span>
                <span className="text-gray-400 ml-2">from last month</span>
              </div>
            </div>

            {/* Active Users Card */}
            <div className="p-6 rounded-2xl" style={{ 
              background: 'linear-gradient(135deg, #2C2C2C 0%, #404040 100%)'
            }}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-400">Active Users</h3>
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#3B82F6' }}>
                  <span className="text-white text-sm">👥</span>
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">24,847</div>
              <div className="flex items-center text-sm">
                <span className="text-green-400 font-semibold">+12.5%</span>
                <span className="text-gray-400 ml-2">from last week</span>
              </div>
            </div>

            {/* Revenue Card */}
            <div className="p-6 rounded-2xl" style={{ 
              background: 'linear-gradient(225deg, #1F1F1F 0%, #3A3A3A 100%)'
            }}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-400">Monthly Revenue</h3>
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F59E0B' }}>
                  <span className="text-white text-sm">📈</span>
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">$2.4M</div>
              <div className="flex items-center text-sm">
                <span className="text-green-400 font-semibold">+8.3%</span>
                <span className="text-gray-400 ml-2">from last month</span>
              </div>
            </div>

            {/* Conversion Rate Card */}
            <div className="p-6 rounded-2xl" style={{ 
              background: 'linear-gradient(315deg, #2A2A2A 0%, #404040 100%)'
            }}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-400">Conversion Rate</h3>
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#8B5CF6' }}>
                  <span className="text-white text-sm">🎯</span>
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">3.24%</div>
              <div className="flex items-center text-sm">
                <span className="text-green-400 font-semibold">+0.8%</span>
                <span className="text-gray-400 ml-2">from last month</span>
              </div>
            </div>
          </div>

          {/* Charts and Analytics Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Revenue Chart */}
            <div className="p-6 rounded-2xl" style={{ 
              background: 'linear-gradient(60deg, #2C2C2C 0%, #3A3A3A 100%)'
            }}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">Revenue Overview</h3>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 text-xs font-medium rounded-full text-white" style={{ backgroundColor: '#3A3A3A' }}>30</button>
                  <button className="px-3 py-1 text-xs font-medium rounded-full text-white" style={{ backgroundColor: '#3A3A3A' }}>60</button>
                  <button className="px-3 py-1 text-xs font-medium rounded-full text-white" style={{ backgroundColor: '#41ab5d' }}>90</button>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Jan</span>
                  <div className="w-32 h-2 rounded-full" style={{ backgroundColor: '#3A3A3A' }}>
                    <div className="h-2 rounded-full" style={{ backgroundColor: '#41ab5d', width: '60%' }}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Feb</span>
                  <div className="w-32 h-2 rounded-full" style={{ backgroundColor: '#3A3A3A' }}>
                    <div className="h-2 rounded-full" style={{ backgroundColor: '#41ab5d', width: '75%' }}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Mar</span>
                  <div className="w-32 h-2 rounded-full" style={{ backgroundColor: '#3A3A3A' }}>
                    <div className="h-2 rounded-full" style={{ backgroundColor: '#41ab5d', width: '45%' }}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Apr</span>
                  <div className="w-32 h-2 rounded-full" style={{ backgroundColor: '#3A3A3A' }}>
                    <div className="h-2 rounded-full" style={{ backgroundColor: '#41ab5d', width: '80%' }}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">May</span>
                  <div className="w-32 h-2 rounded-full" style={{ backgroundColor: '#3A3A3A' }}>
                    <div className="h-2 rounded-full" style={{ backgroundColor: '#41ab5d', width: '65%' }}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Jun</span>
                  <div className="w-32 h-2 rounded-full" style={{ backgroundColor: '#3A3A3A' }}>
                    <div className="h-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400" style={{ width: '95%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="p-6 rounded-2xl" style={{ 
              background: 'linear-gradient(300deg, #2A2A2A 0%, #3A3A3A 100%)'
            }}>
              <h3 className="text-lg font-semibold text-white mb-6">Recent Activity</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#41ab5d' }}></div>
                  <div className="flex-1">
                    <p className="text-sm text-white">New user registration</p>
                    <p className="text-xs text-gray-400">2 minutes ago</p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full text-white" style={{ backgroundColor: '#41ab5d' }}>Success</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#F59E0B' }}></div>
                  <div className="flex-1">
                    <p className="text-sm text-white">Payment processed</p>
                    <p className="text-xs text-gray-400">5 minutes ago</p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full text-white" style={{ backgroundColor: '#F59E0B' }}>Pending</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#3B82F6' }}></div>
                  <div className="flex-1">
                    <p className="text-sm text-white">System update completed</p>
                    <p className="text-xs text-gray-400">1 hour ago</p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full text-white" style={{ backgroundColor: '#3B82F6' }}>Info</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#8B5CF6' }}></div>
                  <div className="flex-1">
                    <p className="text-sm text-white">Monthly report generated</p>
                    <p className="text-xs text-gray-400">2 hours ago</p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full text-white" style={{ backgroundColor: '#8B5CF6' }}>Complete</span>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="p-8 rounded-2xl text-center" style={{ 
            background: 'linear-gradient(135deg, #1A1A1A 0%, #2A2A2A 50%, #1F1F1F 100%)',
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Break Free Financially?
            </h2>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              Take control of your business finances with our comprehensive tax compliance and financial management tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 rounded-full font-semibold text-white hover:scale-105 transition-transform" style={{ backgroundColor: '#41ab5d' }}>
                Get Started Free
              </button>
              <button className="px-8 py-3 rounded-full font-semibold text-white border-2 border-gray-600 hover:border-gray-400 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
        </main>
      </div>
    </div>
  );
}
