import React from 'react';
import { Image, StyleSheet, Platform, View, Text, ScrollView, Dimensions, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState, useRef, useEffect } from 'react';

const flashcards = [
  {
    image: require('@/assets/images/flash_card1.png'),
    headline: 'Welcome to Airis',
    description: 'Your Breath, Smarter.\n\nAiris is here to revolutionize the way you manage your respiratory health. With our smart inhaler and intuitive app, you\'ll gain the power to track, manage, and improve your breathing like never before.',
  },
  {
    image: require('@/assets/images/flash_card2.png'),
    headline: 'Welcome to Airis',
    description: 'Your Breath, Smarter.\n\nAiris is here to revolutionize the way you manage your respiratory health. With our smart inhaler and intuitive app, you\'ll gain the power to track, manage, and improve your breathing like never before.',
  },
  {
    image: require('@/assets/images/flash_card3.png'),
    headline: 'Welcome to Airis',
    description: 'Your Breath, Smarter.\n\nAiris is here to revolutionize the way you manage your respiratory health. With our smart inhaler and intuitive app, you\'ll gain the power to track, manage, and improve your breathing like never before.',
  },
];

const { width } = Dimensions.get('window');

interface FlashcardProps {
  title: string;
  subtitle?: string;
  description: string;
  image: any; // TODO: refine type
}

const Flashcard: React.FC<FlashcardProps> = ({ title, subtitle, description, image }) => {
  return (
    <View style={styles.card}>
      <ThemedText style={styles.title}>{title}</ThemedText>
      {subtitle && <ThemedText style={styles.subtitle}>{subtitle}</ThemedText>}
      <ThemedText style={styles.description}>{description}</ThemedText>
      <Image source={image} style={styles.flashcardImage} />
    </View>
  );
};

export default function WelcomeScreen() {
  const [currentCard, setCurrentCard] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);
  const router = useRouter(); // Add useRouter hook

  const handleScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const cardIndex = Math.round(scrollPosition / width);
    setCurrentCard(cardIndex);
  };

  const scrollToCard = (index: number) => {
    scrollViewRef.current?.scrollTo({
      x: index * width,
      animated: true,
    });
  };

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollToCard(0);
    }
  }, []);

  return (
    <ThemedView style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        decelerationRate="fast"
        snapToInterval={width}
        snapToAlignment="center"
        contentInsetAdjustmentBehavior="automatic"
      >
        {flashcards.map((card, index) => (
          <Flashcard
            key={index}
            title={card.headline}
            description={card.description}
            image={card.image}
          />
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {flashcards.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              index === currentCard ? styles.activeDot : null,
            ]}
          />
        ))}
      </View>
      <View style={styles.buttons}>
        <Pressable 
          onPress={() => router.push('/login')} 
          style={styles.loginButton}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </Pressable>
        <Pressable 
          onPress={() => router.push('/SignUp')} 
          style={styles.signupButton}
        >
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </Pressable>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7374C3',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  card: {
    width: width,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  flashcardImage: {
    width: '80%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    fontFamily: 'sans-serif',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
    fontFamily: 'sans-serif',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'sans-serif',
    marginBottom: 20,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255,255,255,0.5)',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: 'white',
  },
  buttons: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '80%',
    marginTop: 50,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 8,
    marginBottom: 10,
    width: '100%',
    paddingVertical: 12,
  },
  loginButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupButton: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: '100%',
    paddingVertical: 12,
  },
  signupButtonText: {
    color: '#7374C3',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});