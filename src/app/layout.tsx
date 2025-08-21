'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { 
  AppBar, 
  Box, 
  Container, 
  CssBaseline, 
  Drawer, 
  IconButton,
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText,
  Toolbar,
  Typography,
  ThemeProvider,
  createTheme,
  useMediaQuery,
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Providers } from '@/components/Providers';
import LogoutButton from '@/components/LogoutButton';
import './globals.css';

const drawerWidth = 240;

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

const navigation = [
  { name: 'Overview', href: '/' },
  { name: 'Referrals', href: '/referrals' },
];

function ResponsiveLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const pathname = usePathname();
  const isLoginPage = pathname === '/admin/login';

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <Box sx={{ overflow: 'auto' }}>
      <Toolbar />
      <List>
        {navigation.map((item) => (
          <ListItem key={item.name} disablePadding>
            <Link href={item.href} passHref style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
              <ListItemButton onClick={isMobile ? handleDrawerToggle : undefined}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar 
        position="fixed" 
        sx={{ 
          zIndex: (theme) => theme.zIndex.drawer + 1,
          width: { sm: isLoginPage ? '100%' : `calc(100% - ${drawerWidth}px)` },
          ml: { sm: isLoginPage ? 0 : `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          {!isLoginPage && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Commi Internal Dashboard
          </Typography>
          {!isLoginPage && <LogoutButton />}
        </Toolbar>
      </AppBar>
      
      {!isLoginPage && (
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawerContent}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {drawerContent}
          </Drawer>
        </Box>
      )}
      
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1, 
          p: { xs: 2, sm: 3 },
          width: { xs: '100%', sm: isLoginPage ? '100%' : `calc(100% - ${drawerWidth}px)` }
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ px: { xs: 1, sm: 2 } }}>
          {children}
        </Container>
      </Box>
    </Box>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Providers>
            <ResponsiveLayout>{children}</ResponsiveLayout>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}