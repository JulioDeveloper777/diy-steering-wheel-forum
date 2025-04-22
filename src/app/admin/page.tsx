// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import {
//   BarChart3,
//   Users,
//   ShoppingBag,
//   FileText,
//   Image,
//   MessageSquare,
//   Settings,
//   LogOut,
//   PanelLeft,
//   ChevronLeft,
//   ChevronRight,
//   Home,
//   Download,
//   HelpCircle,
//   Menu,
//   X,
// } from "lucide-react";
// import { 
//   AdminUsers, 
//   AdminProducts, 
//   AdminContent, 
//   AdminGallery, 
//   AdminForums, 
//   AdminSettings,
//   AdminOverview
// } from "./components";
// import { useAuth } from "@/components/providers/AuthProvider";

// const adminRoutes = [
//   { path: "", name: "Visão Geral", icon: BarChart3, component: AdminOverview, permission: "view:admin_dashboard" },
//   { path: "usuarios", name: "Usuários", icon: Users, component: AdminUsers, permission: "view:users" },
//   { path: "produtos", name: "Produtos", icon: ShoppingBag, component: AdminProducts, permission: "view:products" },
//   { path: "conteudo", name: "Conteúdo", icon: FileText, component: AdminContent, permission: "edit:any_project" },
//   { path: "galeria", name: "Galeria", icon: Image, component: AdminGallery, permission: "edit:any_project" },
//   { path: "forum", name: "Fórum", icon: MessageSquare, component: AdminForums, permission: "edit:any_post" },
//   { path: "configuracoes", name: "Configurações", icon: Settings, component: AdminSettings, permission: "manage:site_settings" },
// ];

// const AdminDashboard = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { isAdmin, logout, hasPermission } = useAuth();
//   const { toast } = useToast();
  
//   // Check if user is admin on load
//   useEffect(() => {
//     if (!isAdmin) {
//       toast({
//         variant: "destructive",
//         title: "Acesso Restrito",
//         description: "Você não tem permissão para acessar esta área.",
//       });
//       navigate("/admin/login");
//     }
//   }, [isAdmin, navigate, toast]);
  
//   const handleLogout = () => {
//     logout();
//     navigate("/");
//   };
  
//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };
  
//   // Determine which route is active
//   const isRouteActive = (path: string) => {
//     if (path === "" && location.pathname === "/admin") return true;
//     return location.pathname === `/admin/${path}`;
//   };

//   // Filter routes based on user permissions
//   const filteredRoutes = adminRoutes.filter(route => 
//     hasPermission(route.permission)
//   );

//   return (
//     <div className="min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
//       {/* Mobile Menu Toggle */}
//       <div className="md:hidden fixed top-0 left-0 right-0 z-30 bg-white dark:bg-slate-800 border-b p-4">
//         <div className="flex items-center justify-between">
//           <Link to="/admin" className="flex items-center space-x-2">
//             <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-rose-600">
//               Admin
//             </span>
//           </Link>
//           <Button 
//             variant="ghost" 
//             size="icon" 
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </Button>
//         </div>
//       </div>
      
//       {/* Mobile Sidebar */}
//       {mobileMenuOpen && (
//         <div className="md:hidden fixed inset-0 z-20 bg-black bg-opacity-50" onClick={() => setMobileMenuOpen(false)}>
//           <div 
//             className="absolute top-16 left-0 bottom-0 w-64 bg-white dark:bg-slate-800 p-4"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <ScrollArea className="h-[calc(100vh-4rem)]">
//               <nav className="space-y-1">
//                 {filteredRoutes.map((route) => (
//                   <Link 
//                     key={route.path} 
//                     to={`/admin/${route.path}`} 
//                     className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
//                       isRouteActive(route.path) 
//                         ? "bg-slate-200 dark:bg-slate-700 text-red-600 dark:text-red-400" 
//                         : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700"
//                     }`}
//                     onClick={() => setMobileMenuOpen(false)}
//                   >
//                     <route.icon className="mr-3 h-5 w-5" />
//                     {route.name}
//                   </Link>
//                 ))}
                
//                 <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-700">
//                   <Button 
//                     variant="ghost" 
//                     className="flex items-center w-full justify-start px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200"
//                     onClick={handleLogout}
//                   >
//                     <LogOut className="mr-3 h-5 w-5" />
//                     Sair
//                   </Button>
                  
//                   <Link 
//                     to="/" 
//                     className="flex items-center px-3 py-2 mt-2 rounded-md text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700"
//                     onClick={() => setMobileMenuOpen(false)}
//                   >
//                     <Home className="mr-3 h-5 w-5" />
//                     Voltar ao site
//                   </Link>
//                 </div>
//               </nav>
//             </ScrollArea>
//           </div>
//         </div>
//       )}
      
//       {/* Desktop Sidebar */}
//       <div className={`hidden md:block fixed inset-y-0 left-0 z-10 transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-20'}`}>
//         <div className="h-full bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700">
//           <div className={`flex items-center h-16 px-4 ${sidebarOpen ? 'justify-between' : 'justify-center'}`}>
//             {sidebarOpen && (
//               <Link to="/admin" className="flex items-center space-x-2">
//                 <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-rose-600">
//                   Admin
//                 </span>
//               </Link>
//             )}
//             <Button 
//               variant="ghost" 
//               size="icon" 
//               onClick={toggleSidebar}
//               className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
//               aria-label="Toggle sidebar"
//             >
//               {sidebarOpen ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
//             </Button>
//           </div>
          
//           <ScrollArea className="h-[calc(100vh-4rem)]">
//             <nav className="px-3 py-4 space-y-1">
//               {filteredRoutes.map((route) => (
//                 <Link 
//                   key={route.path} 
//                   to={`/admin/${route.path}`} 
//                   className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
//                     isRouteActive(route.path) 
//                       ? "bg-slate-200 dark:bg-slate-700 text-red-600 dark:text-red-400" 
//                       : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700"
//                   } ${sidebarOpen ? '' : 'justify-center'}`}
//                   title={!sidebarOpen ? route.name : undefined}
//                 >
//                   <route.icon className={`${sidebarOpen ? 'mr-3' : ''} h-5 w-5`} />
//                   {sidebarOpen && route.name}
//                 </Link>
//               ))}
              
//               <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-700">
//                 <Button 
//                   variant="ghost" 
//                   className={`flex items-center w-full ${sidebarOpen ? 'justify-start' : 'justify-center'} px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200`}
//                   onClick={handleLogout}
//                   title={!sidebarOpen ? "Sair" : undefined}
//                 >
//                   <LogOut className={`${sidebarOpen ? 'mr-3' : ''} h-5 w-5`} />
//                   {sidebarOpen && 'Sair'}
//                 </Button>
                
//                 <Link 
//                   to="/" 
//                   className={`flex items-center px-3 py-2 mt-2 rounded-md text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 ${sidebarOpen ? '' : 'justify-center'}`}
//                   title={!sidebarOpen ? "Voltar ao site" : undefined}
//                 >
//                   <Home className={`${sidebarOpen ? 'mr-3' : ''} h-5 w-5`} />
//                   {sidebarOpen && 'Voltar ao site'}
//                 </Link>
//               </div>
//             </nav>
//           </ScrollArea>
//         </div>
//       </div>
      
//       {/* Main Content */}
//       <main className={`transition-all duration-300 ${sidebarOpen ? 'md:ml-64' : 'md:ml-20'} pt-16 md:pt-0`}>
//         <div className="container py-6 md:py-10 max-w-full">
//           <Routes>
//             {filteredRoutes.map((route) => (
//               <Route
//                 key={route.path}
//                 path={route.path}
//                 element={<route.component />}
//               />
//             ))}
//           </Routes>
//         </div>
//       </main>
//     </div>
//   );
// };

// import { useEffect, useState } from "react";
// import { DashboardLayout } from "@/components/dashboard/layout";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { useAuth } from "@/lib/auth";
// import { useLocation } from "wouter";
// import { User, Project, Post } from "@shared/schema";
// import { apiRequest } from "@/lib/queryClient";
// import { useQuery } from "@tanstack/react-query";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { AlertCircle, CheckCircle2, Pencil, Trash2, UserX, Users } from "lucide-react";

// export default function AdminDashboard() {
//   const { user, isAuthenticated, isLoading } = useAuth();
//   const [, navigate] = useLocation();

//   // Verificar se o usuário é administrador
//   useEffect(() => {
//     if (!isLoading && !isAuthenticated) {
//       navigate("/sign-in");
//       return;
//     }

//     // Verificar se o usuário possui permissão de administrador
//     if (user && !user.isAdmin) {
//       navigate("/");
//     }
//   }, [user, isAuthenticated, isLoading, navigate]);

//   // Buscar dados
//   const { data: users = [], refetch: refetchUsers } = useQuery<User[]>({
//     queryKey: ['/api/admin/users'],
//     queryFn: async () => {
//       const response = await apiRequest('/api/admin/users');
//       return response as User[];
//     },
//   });

//   const { data: projects = [], refetch: refetchProjects } = useQuery<Project[]>({
//     queryKey: ['/api/projects'],
//     queryFn: async () => {
//       const response = await apiRequest('/api/projects');
//       return response as Project[];
//     },
//   });

//   const { data: posts = [], refetch: refetchPosts } = useQuery<Post[]>({
//     queryKey: ['/api/posts'],
//     queryFn: async () => {
//       const response = await apiRequest('/api/posts');
//       return response as Post[];
//     },
//   });

//   // Funções de gerenciamento
//   const handleDeleteUser = async (id: number) => {
//     if (window.confirm("Tem certeza que deseja excluir este usuário?")) {
//       try {
//         await apiRequest('/api/admin/users/' + id, 'DELETE');
//         refetchUsers();
//       } catch (error) {
//         console.error("Erro ao excluir usuário:", error);
//       }
//     }
//   };

//   const handleToggleAdminStatus = async (user: any) => {
//     try {
//       await apiRequest('/api/admin/users/' + user.id, 'PATCH', { isAdmin: !user.isAdmin });
//       refetchUsers();
//     } catch (error) {
//       console.error("Erro ao alterar status de administrador:", error);
//     }
//   };

//   const handleDeleteProject = async (id: number) => {
//     if (window.confirm("Tem certeza que deseja excluir este projeto?")) {
//       try {
//         await apiRequest('/api/admin/projects/' + id, 'DELETE');
//         refetchProjects();
//       } catch (error) {
//         console.error("Erro ao excluir projeto:", error);
//       }
//     }
//   };

//   const handleDeletePost = async (id: number) => {
//     if (window.confirm("Tem certeza que deseja excluir esta postagem?")) {
//       try {
//         await apiRequest('/api/admin/posts/' + id, 'DELETE');
//         refetchPosts();
//       } catch (error) {
//         console.error("Erro ao excluir postagem:", error);
//       }
//     }
//   };

//   // Loading state
//   if (isLoading) {
//     return (
//       <div className="flex h-screen items-center justify-center">
//         <p>Carregando...</p>
//       </div>
//     );
//   }

//   return (
//     <DashboardLayout>
//       <div className="container py-6">
//         <h1 className="mb-6 text-3xl font-bold">Painel Administrativo</h1>

//         <Tabs defaultValue="users" className="w-full">
//           <TabsList className="mb-6 grid w-full grid-cols-3">
//             <TabsTrigger value="users">
//               <Users className="mr-2 h-4 w-4" />
//               Usuários
//             </TabsTrigger>
//             <TabsTrigger value="projects">
//               <Pencil className="mr-2 h-4 w-4" />
//               Projetos
//             </TabsTrigger>
//             <TabsTrigger value="posts">
//               <AlertCircle className="mr-2 h-4 w-4" />
//               Postagens do Fórum
//             </TabsTrigger>
//           </TabsList>

//           {/* Usuários Tab */}
//           <TabsContent value="users">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Gerenciar Usuários</CardTitle>
//                 <CardDescription>
//                   Lista de todos os usuários registrados na plataforma.
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <Table>
//                   <TableHeader>
//                     <TableRow>
//                       <TableHead>ID</TableHead>
//                       <TableHead>Nome de Usuário</TableHead>
//                       <TableHead>Email</TableHead>
//                       <TableHead>Nome</TableHead>
//                       <TableHead>Admin</TableHead>
//                       <TableHead>Ações</TableHead>
//                     </TableRow>
//                   </TableHeader>
//                   <TableBody>
//                     {users.map((user) => (
//                       <TableRow key={user.id}>
//                         <TableCell>{user.id}</TableCell>
//                         <TableCell>{user.username}</TableCell>
//                         <TableCell>{user.email}</TableCell>
//                         <TableCell>
//                           {user.firstName} {user.lastName}
//                         </TableCell>
//                         <TableCell>
//                           {user.isAdmin ? (
//                             <CheckCircle2 className="h-5 w-5 text-green-500" />
//                           ) : (
//                             <UserX className="h-5 w-5 text-red-500" />
//                           )}
//                         </TableCell>
//                         <TableCell>
//                           <div className="flex space-x-2">
//                             <Button
//                               variant="outline"
//                               size="sm"
//                               onClick={() => handleToggleAdminStatus(user)}
//                             >
//                               {user.isAdmin ? "Remover Admin" : "Tornar Admin"}
//                             </Button>
//                             <Button
//                               variant="destructive"
//                               size="sm"
//                               onClick={() => handleDeleteUser(user.id)}
//                             >
//                               <Trash2 className="h-4 w-4" />
//                             </Button>
//                           </div>
//                         </TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </CardContent>
//             </Card>
//           </TabsContent>

//           {/* Projetos Tab */}
//           <TabsContent value="projects">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Gerenciar Projetos</CardTitle>
//                 <CardDescription>
//                   Todos os projetos criados pelos usuários.
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <Table>
//                   <TableHeader>
//                     <TableRow>
//                       <TableHead>ID</TableHead>
//                       <TableHead>Título</TableHead>
//                       <TableHead>Status</TableHead>
//                       <TableHead>Progresso</TableHead>
//                       <TableHead>Criado por</TableHead>
//                       <TableHead>Ações</TableHead>
//                     </TableRow>
//                   </TableHeader>
//                   <TableBody>
//                     {projects.map((project) => (
//                       <TableRow key={project.id}>
//                         <TableCell>{project.id}</TableCell>
//                         <TableCell>{project.title}</TableCell>
//                         <TableCell>
//                           <span
//                             className={`px-2 py-1 rounded-full text-xs ${
//                               project.status === "completed"
//                                 ? "bg-green-100 text-green-800"
//                                 : project.status === "planning"
//                                 ? "bg-blue-100 text-blue-800"
//                                 : "bg-yellow-100 text-yellow-800"
//                             }`}
//                           >
//                             {project.status}
//                           </span>
//                         </TableCell>
//                         <TableCell>{project.progress}%</TableCell>
//                         <TableCell>{project.createdBy}</TableCell>
//                         <TableCell>
//                           <Button
//                             variant="destructive"
//                             size="sm"
//                             onClick={() => handleDeleteProject(project.id)}
//                           >
//                             <Trash2 className="h-4 w-4" />
//                           </Button>
//                         </TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </CardContent>
//             </Card>
//           </TabsContent>

//           {/* Posts Tab */}
//           <TabsContent value="posts">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Gerenciar Postagens do Fórum</CardTitle>
//                 <CardDescription>
//                   Todas as postagens do fórum da comunidade.
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <Table>
//                   <TableHeader>
//                     <TableRow>
//                       <TableHead>ID</TableHead>
//                       <TableHead>Título</TableHead>
//                       <TableHead>Autor</TableHead>
//                       <TableHead>Data</TableHead>
//                       <TableHead>Ações</TableHead>
//                     </TableRow>
//                   </TableHeader>
//                   <TableBody>
//                     {posts.map((post) => (
//                       <TableRow key={post.id}>
//                         <TableCell>{post.id}</TableCell>
//                         <TableCell>{post.title}</TableCell>
//                         <TableCell>{post.authorId}</TableCell>
//                         <TableCell>
//                           {post.createdAt ? new Date(post.createdAt).toLocaleDateString() : 'N/A'}
//                         </TableCell>
//                         <TableCell>
//                           <Button
//                             variant="destructive"
//                             size="sm"
//                             onClick={() => handleDeletePost(post.id)}
//                           >
//                             <Trash2 className="h-4 w-4" />
//                           </Button>
//                         </TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </CardContent>
//             </Card>
//           </TabsContent>
//         </Tabs>
//       </div>
//     </DashboardLayout>
//   );
// }