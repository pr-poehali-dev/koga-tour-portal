import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface MapPoint {
  id: string;
  name: string;
  type: "culture" | "sport" | "nature" | "history";
  description: string;
  x: number;
  y: number;
  image?: string;
}

interface Route {
  id: string;
  name: string;
  description: string;
  duration: string;
  points: string[];
  color: string;
}

const InteractiveMap = () => {
  const [selectedPoint, setSelectedPoint] = useState<MapPoint | null>(null);
  const [activeRoute, setActiveRoute] = useState<string | null>(null);

  const mapPoints: MapPoint[] = [
    {
      id: "cultural-center",
      name: "Культурный центр",
      type: "culture",
      description: "Современный культурный комплекс с выставочными залами и театром",
      x: 35,
      y: 40,
      image: "/img/a77e845b-0093-4b2c-be70-dcb8d2b8df3f.jpg"
    },
    {
      id: "sports-complex",
      name: "Спортивный комплекс",
      type: "sport", 
      description: "Ледовый дворец и современные спортивные сооружения",
      x: 65,
      y: 30,
      image: "/img/ea96fc63-843a-427a-b846-c0682ed2cfb0.jpg"
    },
    {
      id: "city-park",
      name: "Городской парк",
      type: "nature",
      description: "Зеленая зона отдыха в центре города",
      x: 50,
      y: 60
    },
    {
      id: "museum",
      name: "Краеведческий музей",
      type: "history", 
      description: "История развития города и нефтяной промышленности",
      x: 25,
      y: 25
    },
    {
      id: "embankment",
      name: "Набережная",
      type: "nature",
      description: "Благоустроенная набережная для прогулок",
      x: 70,
      y: 70
    },
    {
      id: "memorial",
      name: "Мемориальный комплекс",
      type: "history",
      description: "Памятник истории и воинской славы",
      x: 15,
      y: 55
    }
  ];

  const routes: Route[] = [
    {
      id: "historical",
      name: "Исторический маршрут",
      description: "Знакомство с историей и культурой города",
      duration: "3 часа",
      points: ["museum", "cultural-center", "memorial"],
      color: "#2563EB"
    },
    {
      id: "active",
      name: "Активный отдых", 
      description: "Спорт и природа",
      duration: "4 часа",
      points: ["sports-complex", "city-park", "embankment"],
      color: "#059669"
    },
    {
      id: "family",
      name: "Семейный маршрут",
      description: "Подходит для всей семьи",
      duration: "2.5 часа", 
      points: ["city-park", "cultural-center", "embankment"],
      color: "#DC2626"
    }
  ];

  const getPointTypeIcon = (type: string) => {
    switch (type) {
      case "culture": return "Camera";
      case "sport": return "Activity";
      case "nature": return "TreePine";
      case "history": return "Clock";
      default: return "MapPin";
    }
  };

  const getPointTypeColor = (type: string) => {
    switch (type) {
      case "culture": return "bg-kogalym-blue";
      case "sport": return "bg-kogalym-green";
      case "nature": return "bg-green-500";
      case "history": return "bg-amber-500";
      default: return "bg-gray-500";
    }
  };

  const getPointTypeBadge = (type: string) => {
    switch (type) {
      case "culture": return "Культура";
      case "sport": return "Спорт";
      case "nature": return "Природа";
      case "history": return "История";
      default: return type;
    }
  };

  const isPointInRoute = (pointId: string, routeId: string) => {
    const route = routes.find(r => r.id === routeId);
    return route?.points.includes(pointId);
  };

  return (
    <div className="bg-white">
      {/* Route Selector */}
      <div className="mb-6">
        <h3 className="font-montserrat text-xl font-semibold mb-4 text-gray-900">
          Выберите маршрут:
        </h3>
        <div className="flex flex-wrap gap-3">
          <Button
            variant={activeRoute === null ? "default" : "outline"}
            onClick={() => setActiveRoute(null)}
            className="mb-2"
          >
            Все точки
          </Button>
          {routes.map((route) => (
            <Button
              key={route.id}
              variant={activeRoute === route.id ? "default" : "outline"}
              onClick={() => setActiveRoute(route.id)}
              className="mb-2"
              style={{
                backgroundColor: activeRoute === route.id ? route.color : undefined,
                borderColor: route.color
              }}
            >
              {route.name}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Map Container */}
        <div className="lg:col-span-2">
          <div className="relative bg-gradient-to-br from-blue-50 to-green-50 rounded-lg border-2 border-gray-200 h-96 overflow-hidden">
            {/* Background City Layout */}
            <div className="absolute inset-0">
              {/* Streets */}
              <div className="absolute top-1/3 left-0 right-0 h-1 bg-gray-300"></div>
              <div className="absolute top-2/3 left-0 right-0 h-1 bg-gray-300"></div>
              <div className="absolute left-1/3 top-0 bottom-0 w-1 bg-gray-300"></div>
              <div className="absolute left-2/3 top-0 bottom-0 w-1 bg-gray-300"></div>
              
              {/* River */}
              <div className="absolute bottom-0 left-1/4 right-0 h-8 bg-blue-200 rounded-t-full opacity-60"></div>
              
              {/* City Blocks */}
              <div className="absolute top-10 left-10 w-16 h-12 bg-gray-100 rounded border"></div>
              <div className="absolute top-16 right-16 w-20 h-16 bg-gray-100 rounded border"></div>
              <div className="absolute bottom-20 left-1/4 w-24 h-16 bg-gray-100 rounded border"></div>
            </div>

            {/* Route Lines */}
            {activeRoute && (
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                  <marker
                    id="arrowhead"
                    markerWidth="10"
                    markerHeight="7"
                    refX="9"
                    refY="3.5"
                    orient="auto"
                  >
                    <polygon
                      points="0 0, 10 3.5, 0 7"
                      fill={routes.find(r => r.id === activeRoute)?.color || "#2563EB"}
                    />
                  </marker>
                </defs>
                {routes
                  .find(r => r.id === activeRoute)
                  ?.points.slice(0, -1)
                  .map((pointId, index) => {
                    const currentPoint = mapPoints.find(p => p.id === pointId);
                    const nextPointId = routes.find(r => r.id === activeRoute)?.points[index + 1];
                    const nextPoint = mapPoints.find(p => p.id === nextPointId);
                    
                    if (!currentPoint || !nextPoint) return null;
                    
                    return (
                      <line
                        key={`${pointId}-${nextPointId}`}
                        x1={`${currentPoint.x}%`}
                        y1={`${currentPoint.y}%`}
                        x2={`${nextPoint.x}%`}
                        y2={`${nextPoint.y}%`}
                        stroke={routes.find(r => r.id === activeRoute)?.color || "#2563EB"}
                        strokeWidth="3"
                        strokeDasharray="8,4"
                        markerEnd="url(#arrowhead)"
                        className="animate-pulse"
                      />
                    );
                  })}
              </svg>
            )}

            {/* Map Points */}
            {mapPoints.map((point) => {
              const isInActiveRoute = activeRoute ? isPointInRoute(point.id, activeRoute) : true;
              const opacity = activeRoute ? (isInActiveRoute ? 1 : 0.3) : 1;
              
              return (
                <button
                  key={point.id}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-110 ${
                    selectedPoint?.id === point.id ? "scale-125 z-10" : ""
                  }`}
                  style={{
                    left: `${point.x}%`,
                    top: `${point.y}%`,
                    opacity
                  }}
                  onClick={() => setSelectedPoint(point)}
                >
                  <div className={`w-8 h-8 rounded-full ${getPointTypeColor(point.type)} flex items-center justify-center shadow-lg border-2 border-white`}>
                    <Icon name={getPointTypeIcon(point.type)} size={16} className="text-white" />
                  </div>
                  {isInActiveRoute && activeRoute && (
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow-lg text-xs font-medium whitespace-nowrap">
                      {point.name}
                    </div>
                  )}
                </button>
              );
            })}

            {/* Legend */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
              <h4 className="font-montserrat font-semibold text-sm mb-2">Легенда:</h4>
              <div className="space-y-1 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-kogalym-blue rounded-full"></div>
                  <span>Культура</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-kogalym-green rounded-full"></div>
                  <span>Спорт</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Природа</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                  <span>История</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Panel */}
        <div>
          {selectedPoint ? (
            <Card className="animate-fade-in">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-6 h-6 rounded-full ${getPointTypeColor(selectedPoint.type)} flex items-center justify-center`}>
                    <Icon name={getPointTypeIcon(selectedPoint.type)} size={14} className="text-white" />
                  </div>
                  <Badge variant="secondary">{getPointTypeBadge(selectedPoint.type)}</Badge>
                </div>
                <CardTitle className="font-montserrat">{selectedPoint.name}</CardTitle>
              </CardHeader>
              <CardContent>
                {selectedPoint.image && (
                  <img
                    src={selectedPoint.image}
                    alt={selectedPoint.name}
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                )}
                <p className="font-open-sans text-gray-600 mb-4">
                  {selectedPoint.description}
                </p>
                <Button className="w-full bg-kogalym-blue hover:bg-blue-700">
                  <Icon name="Navigation" size={16} className="mr-2" />
                  Построить маршрут
                </Button>
              </CardContent>
            </Card>
          ) : activeRoute ? (
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="font-montserrat flex items-center gap-2">
                  <Icon name="Route" size={20} />
                  {routes.find(r => r.id === activeRoute)?.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-open-sans text-gray-600 mb-4">
                  {routes.find(r => r.id === activeRoute)?.description}
                </p>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" size={16} className="text-gray-500" />
                    <span className="text-sm text-gray-600">
                      {routes.find(r => r.id === activeRoute)?.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="MapPin" size={16} className="text-gray-500" />
                    <span className="text-sm text-gray-600">
                      {routes.find(r => r.id === activeRoute)?.points.length} точек
                    </span>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <h4 className="font-montserrat font-semibold text-sm">Остановки:</h4>
                  {routes.find(r => r.id === activeRoute)?.points.map((pointId, index) => {
                    const point = mapPoints.find(p => p.id === pointId);
                    return (
                      <div key={pointId} className="flex items-center gap-2 text-sm">
                        <span className="text-gray-400">{index + 1}.</span>
                        <div className={`w-3 h-3 rounded-full ${getPointTypeColor(point?.type || "")}`}></div>
                        <span>{point?.name}</span>
                      </div>
                    );
                  })}
                </div>
                <Button className="w-full bg-kogalym-blue hover:bg-blue-700">
                  <Icon name="Calendar" size={16} className="mr-2" />
                  Забронировать тур
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle className="font-montserrat">Интерактивная карта</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-open-sans text-gray-600 mb-4">
                  Кликните на точку на карте, чтобы узнать подробности, или выберите готовый маршрут.
                </p>
                <div className="space-y-3">
                  <h4 className="font-montserrat font-semibold text-sm">Статистика:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-2 bg-gray-50 rounded">
                      <div className="font-montserrat text-lg font-bold text-kogalym-blue">{mapPoints.length}</div>
                      <div className="text-xs text-gray-600">достопримечательностей</div>
                    </div>
                    <div className="text-center p-2 bg-gray-50 rounded">
                      <div className="font-montserrat text-lg font-bold text-kogalym-green">{routes.length}</div>
                      <div className="text-xs text-gray-600">маршрутов</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;