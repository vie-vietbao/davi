import {Animated, Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Svg, {Path} from 'react-native-svg';

import {Family} from '@/screens/family/family';
import {Home} from '@/screens/home/home';
import Icon from 'react-native-vector-icons/Ionicons';
import {Notification} from '@/screens/notification/notification';
import {User} from '@/screens/user/user';
import {layout} from '@/theme';

const BottomMenu = () => {
  const [activeTab, setActiveTab] = useState(0);
  const animatedValues = useRef([0, 1, 2, 3].map(() => new Animated.Value(0))).current;

  const tabs = [
    {id: 0, icon: 'home-outline', label: 'Home', screen: Home},
    {id: 1, icon: 'people-outline', label: 'Family', screen: Family},
    {id: 2, icon: 'notifications-outline', label: 'Notification', screen: Notification},
    {id: 3, icon: 'person-outline', label: 'User', screen: User},
  ];

  useEffect(() => {
    animatedValues.forEach((anim, index) => {
      Animated.spring(anim, {
        toValue: activeTab === index ? 1 : 0,
        useNativeDriver: true,
        tension: 100,
        friction: 10,
      }).start();
    });
  }, [activeTab]);

  const handlePress = (tabId: number) => {
    setActiveTab(tabId);
  };

  const getActiveTabPosition = () => {
    const tabWidth = (layout.width - 40) / 4;
    return activeTab * tabWidth + tabWidth / 2;
  };

  const createCutoutPath = () => {
    const barWidth = layout.width - 40;
    const barHeight = 70;
    const centerX = getActiveTabPosition();
    const radius = 35;
    const cutoutWidth = 70;

    return `
      M 0,${radius}
      Q 0,0 ${radius},0
      L ${centerX - cutoutWidth / 2},0
      Q ${centerX - cutoutWidth / 2 + 10},0 ${centerX - cutoutWidth / 2 + 15},-15
      Q ${centerX},-25 ${centerX + cutoutWidth / 2 - 15},-15
      Q ${centerX + cutoutWidth / 2 - 10},0 ${centerX + cutoutWidth / 2},0
      L ${barWidth - radius},0
      Q ${barWidth},0 ${barWidth},${radius}
      L ${barWidth},${barHeight - radius}
      Q ${barWidth},${barHeight} ${barWidth - radius},${barHeight}
      L ${radius},${barHeight}
      Q 0,${barHeight} 0,${barHeight - radius}
      Z
    `;
  };

  const ActiveScreen = tabs[activeTab].screen;

  return (
    <SafeAreaView style={styles.container}>
      {/* Phần nội dung màn hình */}
      <View style={styles.contentContainer}>
        <ActiveScreen />
      </View>

      {/* Bottom Menu */}
      <View style={styles.menuContainer}>
        <View style={styles.menuBar}>
          <Svg width={layout.width - 40} height={70} style={StyleSheet.absoluteFill}>
            <Path d={createCutoutPath()} fill="#1F2937" />
          </Svg>
        </View>

        {/* Tab buttons */}
        <View style={styles.tabsContainer}>
          {tabs.map((tab, index) => {
            const isActive = activeTab === tab.id;
            const translateY = animatedValues[index].interpolate({
              inputRange: [0, 1],
              outputRange: [0, -30],
            });
            const scale = animatedValues[index].interpolate({
              inputRange: [0, 1],
              outputRange: [1, 1.2],
            });

            return (
              <TouchableOpacity
                key={tab.id}
                onPress={() => handlePress(tab.id)}
                style={styles.tabButton}
                activeOpacity={0.7}>
                <Animated.View
                  style={[
                    styles.iconContainer,
                    isActive && styles.activeIconContainer,
                    {
                      transform: [{translateY}, {scale}],
                    },
                  ]}>
                  <Icon name={tab.icon} size={28} color="#FFFFFF" style={styles.icon} />
                </Animated.View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC0D9',
  },
  contentContainer: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  screenTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1F2937',
    marginTop: 20,
  },
  screenSubtitle: {
    fontSize: 18,
    color: '#4B5563',
    marginTop: 10,
  },
  menuContainer: {
    position: 'relative',
    width: layout.width - 40,
    height: 80,
    alignSelf: 'center',
    // marginBottom: 20,
  },
  menuBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 70,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
    paddingHorizontal: 10,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  iconContainer: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  activeIconContainer: {
    backgroundColor: '#EC4899',
    shadowColor: '#EC4899',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
  },
  icon: {
    textAlign: 'center',
  },
});

export default BottomMenu;
