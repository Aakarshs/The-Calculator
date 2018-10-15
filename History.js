import React from 'react';
import Carousel from 'react-native-snap-carousel';
import MyCarousel from './MyCarousel';
import History from './History';
import { createStackNavigator } from 'react-navigation';
import ReactNativeComponentTree from 'react-native/Libraries/Renderer/shims/ReactNativeComponentTree';
//ReactNativeComponentTree.getInstanceFromNode(e.target);
import { Button } from 'react-native';
//import Dimensions from 'Dimensions';
let math = require('mathjs');
import { LinearGradient } from 'expo';
import {
    StatusBar,
    Dimensions,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    TouchableWithoutFeedback,
    AsyncStorage,
    Animated, Platform
} from 'react-native';
import { KeyboardAvoidingView } from 'react-native';

import { AppLoading, Font } from 'expo';
import ModalDropdown from 'react-native-modal-dropdown';
//import * as Animatable from 'react-native-animatable';
import { Expo } from 'expo';
import { TextInput } from 'react-native-gesture-handler';
import { View, Text, FlatList } from "react-native";
import Menu from './Menu';
import SideMenu from 'react-native-side-menu';
const window = Dimensions.get('window');
//const SideMenu = require('react-native-side-menu');

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);

        const answers = [
            { key: 'a' },
            { key: 'b' }
        ]

        this.springValue0 = new Animated.Value(1);
        this.springValue1 = new Animated.Value(1);
        this.springValue2 = new Animated.Value(1);
        this.springValue3 = new Animated.Value(1);
        this.springValue4 = new Animated.Value(1);
        this.springValue5 = new Animated.Value(1);
        this.springValue6 = new Animated.Value(1);
        this.springValue7 = new Animated.Value(1);
        this.springValue8 = new Animated.Value(1);
        this.springValue9 = new Animated.Value(1);
        this.springValue10 = new Animated.Value(1);
        this.springValue11 = new Animated.Value(1);
        this.springValue12 = new Animated.Value(1);
        this.springValue13 = new Animated.Value(1);
        this.springValue14 = new Animated.Value(1);
       
        this.springValue20 = new Animated.Value(1);
        this.springValue21 = new Animated.Value(1);
        this.springValue22 = new Animated.Value(0);
        //===================
        this.springValue23 = new Animated.Value(900);
        this.springResult = new Animated.Value(1);
        this.springResult2 = new Animated.Value(1);
        this.springfav = new Animated.Value(1);

        this.springDelete = new Animated.Value(1);
        this.springStar = new Animated.Value(1);
        this.springValueCarousel = new Animated.Value(1);

        this.state = {
            //loading: false,
            scientific_bg: '#757883',
            statistics_bg: 'rgba(43, 226, 177, 0)',
            h: (Dimensions.get('window').height) * 1.1,
            fontLoaded: true,
            animated: new Animated.Value(0),
            //springValue: new Animated.Value(0.3),
            sol_history: '', duration: 1000,
            toggledOn: false,
            answers: answers,
            text: '',
            answer: ' ',
            favourites: ['favourites appear here'],
            data: ['fwef', 'fawefw'],
            videos: Platform.OS === 'ios' ? [
                {
                    id: "0",
                    title: " ",
                    tile_answer: ""
                },
                {
                    id: "1",
                    title: "Your history will appear here",
                    tile_answer: ""
                },
                {
                    id: "2",
                    title: "Your history will appear here",
                    tile_answer: ""
                }
            ] : [
                {
                    id: "0",
                    title: " ",
                    tile_answer: ""
                },
                {
                    id: "1",
                    title: "Your history will appear here",
                    tile_answer: ""
                },
                {
                    id: "2",
                    title: "Your history will appear here",
                    tile_answer: ""
                }
            ].reverse()
        };

        this.handlepress = this.handlepress.bind(this);
        this.calculate = this.calculate.bind(this);
        this.second = this.second.bind(this);
        this.addtolist = this.addtolist.bind(this);
        this.update = this.update.bind(this);
        this.savefave = this.savefave.bind(this);
        this.props = props;
        this._carousel = {};
    }


    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('./menu.png')}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        ),
    };


    async componentDidMount() {
        StatusBar.setBarStyle('light-content', true);
        // StatusBar.setHidden(true);
        await Font.loadAsync({
            'ample5': require('./assets/fonts/AmpleSoft-Regular4.ttf'),
        });
        this.setState({ fontLoaded: false });

    }

    async componentWillMount() {
        try {
            const value = await AsyncStorage.getItem('favourites');
            const hist_value = await AsyncStorage.getItem('videos')
            if (value !== null) {
                this.setState({ "favourites": JSON.parse(value), "videos": JSON.parse(hist_value) });
                console.log(value);
            }
        } catch (error) {
            // Error retrieving data
        }
    }

    async clearStorage() {
        try {
            await AsyncStorage.clear();
        } catch (error) {
        }
    }

    async savefave() {
        try {
            var fy = this.state.favourites;
            await AsyncStorage.setItem("favourites", JSON.stringify(fy));
            this.setState({ "favourites": this.state.favourites });
        }
        catch (error) {
            //console.log(JSON.parse(value))
        }
    }

    async saveHistory() {
        try {
            var temp = this.state.videos;
            await AsyncStorage.setItem("videos", JSON.stringify(temp));
        }
        catch (error) {
        }
    }

    //=================================

    handlepress() {
        this.setState({
            text: '1'
        })
    }


    second() {
        if (this.state.text[this.state.text.length - 2] === '+' && isNaN(Number(this.state.text[this.state.text.length - 1])) === false) {
            var sol = math.eval(this.state.text);
            this.setState({
                answer: sol.toString(),

            });
        }
    }


    calculate() {
        var sol = eval(this.state.text);
        this.setState({
            text: sol.toString()
        });
    }


    //=========================================================================
    //Animation Functions======================================================


    _dropdown_2_renderRow(rowData, rowID, highlighted) {
        return (

            <View style={{ flex: 1, flexDirection: 'row', paddingLeft: 20, paddingRight: 20, paddingTop: 25, paddingBottom: 25, alignItems: 'center', }}>

                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ fontFamily: 'ample5', fontSize: 25, color: 'rgb(43, 226, 177)', paddingRight: 25, }}>
                        {`${rowData.tile_answer}`}
                    </Text>

                    <Text style={{ fontFamily: 'ample5', fontSize: 20, color: 'white', paddingRight: 25, }}>
                        {`${rowData.title}`}
                    </Text>
                </View>

                <TouchableHighlight
                    onPress={() => {
                        this.animfav();
                        var temp = this.state.favourites;
                        temp.unshift(rowData.tile_answer);
                        this.setState({ favourites: temp }, () => { this.savefave() });
                    }} style={{ position: 'absolute', right: 10 }}>
                    <Animated.View style={{ transform: [{ scale: this.springfav }] }}>
                        <Image
                            source={require('./assets/fav.png')}
                            style={{ height: 20, width: 21, opacity: 0.3, }} />
                    </Animated.View>
                </TouchableHighlight>
            </View>

        );
    }
    //============================================================================
    //============================================================================

    animfav() {
        this.springfav.setValue(1.2);
        Animated.spring(this.springfav, {
            toValue: 1,
            delay: 0,
            useNativeDriver: true,
            friction: 4
        }).start()
    }

    _renderItem = ({ item, index }) => {

        const translateY = this.state.animated.interpolate({
            inputRange: [0, 1],
            outputRange: [-10, 0]
        });
        const transform = [{ translateY }];

        const opacity = this.state.animated.interpolate({
            inputRange: [0.5, 1],
            outputRange: [0.5, 1]
        });

        return (

            <LinearGradient colors={['#5F626C', 'rgb(35,38,46)',]} start={[0, 0]} end={[1, 1]} style={{
                alignSelf: "center",
                width: Dimensions.get('window').width - 20, height: Dimensions.get('window').height / 3.5,
                shadowOffset: { width: 0, height: 0, },
                margin: 35,
                marginTop: 25,
                borderRadius: 10,
                shadowColor: 'black',
                shadowOpacity: 0.2,
                zIndex: 9999999,
                padding: 10,
                marginBottom: 40,
                elevation: 10
                //  opacity: 0.95,
            }}>

                <ModalDropdown
                    renderSeparator={() => <View />}
                    options={['Clear Deck', 'Clear Favorites', 'About Snow Inc', 'Privacy Policy']}
                    dropdownTextStyle={styles.dropdownMenuText}
                    dropdownStyle={styles.dropdownMenuSettings}
                    onSelect={(idx, value) => {
                        if (value === 'Clear Favorites') {
                            this.setState({ favourites: ['favourites appear here'] }, () => { this.savefave(); })
                        }
                        else if (value === 'Clear Deck') {
                            this.setState({
                                videos: [
                                    {
                                        id: "0",
                                        title: " ",
                                        tile_answer: ""
                                    },
                                    {
                                        id: "1",
                                        title: " ",
                                        tile_answer: "Your history will appear here"
                                    },
                                    {
                                        id: "2",
                                        title: " ",
                                        tile_answer: "Your history will appear here"
                                    }
                                ]
                            }, () => { this.saveHistory() })
                        }
                    }
                    }
                    style={{ opacity: 0.3, position: 'absolute', right: 0, padding: 10, zIndex: 9999999 }}>


                    <Image source={require("./assets/settings.png")} style={{ height: 20, width: 20, }} />
                </ModalDropdown>

                <View style={{ height: 100 }}>
                    <Animated.View style={{ transform: [{ scale: this.springResult }] }}>
                        <Text selectable={true} numberOfLines={1} adjustsFontSizeToFit={true} style={{ color: 'rgb(43, 226, 177)', fontSize: 80, fontFamily: 'ample5' }}>{item.tile_answer}</ Text>
                    </Animated.View>

                    <Animated.View style={{ transform: [{ scale: this.springResult2 }] }}>
                        <Text selectable={true} onChangenumberOfLines={1} adjustsFontSizeToFit={true} style={{ color: 'silver', fontSize: 30, fontFamily: 'ample5' }}>{item.title}</ Text>
                    </Animated.View>
                </View>



                <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 30 }}>


                    <TouchableHighlight onPress={() => {

                        this.springDelete.setValue(2);
                        Animated.spring(this.springDelete, {
                            toValue: 1,
                            delay: 0,
                            useNativeDriver: true,
                            friction: 1
                        }).start()

                        var x = this.state.videos.slice();
                        var y = this.state.text;
                        x[0] = {
                            id: "0",
                            title: "",
                            tile_answer: "",
                        }
                        this.setState({
                            text: '',
                            videos: x
                        });
                    }}>

                        <Animated.View style={{ transform: [{ scale: this.springDelete }] }}>
                            <Image
                                source={require('./assets/delete.png')}
                                style={{ height: 20, width: 16, opacity: 0.3 }} />
                        </Animated.View>
                    </TouchableHighlight>


                    <Image source={require('./assets/divide.png')} style={styles.divider} />

                    <TouchableHighlight
                        onPress={() => {

                            this.springStar.setValue(2);
                            Animated.spring(this.springStar, {
                                toValue: 1,
                                delay: 0,
                                useNativeDriver: true,
                                friction: 1
                            }).start()

                            var temp = this.state.favourites;
                            temp.unshift(item.tile_answer);
                            this.setState({ favourites: temp }, () => { this.savefave(); });
                        }}>
                        <Animated.View style={{ transform: [{ scale: this.springStar }] }}>
                            <Image
                                source={require('./assets/star.png')}
                                style={{ height: 20, width: 21, opacity: 0.3 }} />
                        </Animated.View>
                    </TouchableHighlight>


                    <Image source={require('./assets/divide.png')} style={styles.divider} />


                    <TouchableHighlight onPress={() => { this.clearStorage() }}>
                        <Text style={{ fontFamily: 'ample5', fontSize: 40, opacity: 0.6, color: 'white', top: -6 }}>c</Text>
                    </TouchableHighlight>


                    <Image source={require('./assets/divide.png')} style={styles.divider} />

                    <ModalDropdown
                        dropdownTextStyle={styles.dropdownMenuText}
                        dropdownStyle={styles.dropdownMenu}
                        renderSeparator={() => <View />}
                        options={this.state.videos}
                        renderButtonText={(rowData) => this._dropdown_2_renderButtonText(rowData)}
                        renderRow={this._dropdown_2_renderRow.bind(this)}
                        //  renderSeparator={(sectionID, rowID, adjacentRowHighlighted) => this._dropdown_2_renderSeparator(sectionID, rowID, adjacentRowHighlighted)}

                        renderRow={this._dropdown_2_renderRow.bind(this)}
                        options={this.state.videos}>
                        <Image
                            source={require('./assets/history.png')}
                            style={{ height: 20, width: 22, opacity: 0.3 }} />
                    </ModalDropdown>

                </View>
            </LinearGradient>
        );
    }


    send_to_back() {
        var add = this.state.videos;
        var update_id = 0;

        add.unshift({
            id: update_id.toString(),
            title: this.state.text,
            tile_answer: this.state.sol_history
        })
        this.setState({ videos: add }, () => { this.equal(); })
    }


    addtolist() {
        const { answers } = this.state;
        answers.push({ key: 'c' })
        this.setState({
            answers: answers.slice(0)
        });
    }

    animResult() {
        this.springResult.setValue(0.9);
        Animated.spring(this.springResult, {
            toValue: 1,
            delay: 0,
            useNativeDriver: true,
            friction: 9
        }).start()

        this.springResult2.setValue(0.95);
        Animated.spring(this.springResult2, {
            toValue: 1,
            delay: 0,
            useNativeDriver: true,
            friction: 3
        }).start()

    }


    equal() {
        this.animResult();
        var x = this.state.videos.slice();
        x[0] = {
            id: "0",
            title: x[0].tile_answer,
            tile_answer: x[0].tile_answer,
        }
        this.setState({
            videos: x
        });
    }
    update() {

        var x = this.state.videos.slice();
        var y = this.state.text;
        x[0] = {
            id: "0",
            title: y,
            tile_answer: ''
        }
        this.setState({
            videos: x
        });
    }




    toggle_statistics() {
        this.springValue20.setValue(1);
        Animated.spring(this.springValue20, {
            toValue: 0.01,
            delay: 0,
            useNativeDriver: true,
            friction: 9
        }).start()

        this.springValue21.setValue(1);
        Animated.spring(this.springValue21, {
            toValue: -((Dimensions.get('window').height) / 2),
            delay: 0,
            useNativeDriver: true,
            friction: 9
        }).start()

        this.springValue22.setValue(0.01);
        Animated.spring(this.springValue22, {
            toValue: 1,
            delay: 0,
            useNativeDriver: true,
            friction: 9
        }).start()


        Animated.spring(this.springValue23, {
            toValue: 300,
            delay: 0,
            useNativeDriver: true,
            friction: 9
        }).start()


    }

    //22 is set to 0
    //scientific=20=scale
    //statsitics=21=translate,22=scale

    toggle_scientific() {
        //bring back sceintific
        this.springValue20.setValue(0.01);
        Animated.spring(this.springValue20, {
            toValue: 1,
            delay: 0,
            useNativeDriver: true,
            friction: 9
        }).start()

        //minimize statsitics
        this.springValue22.setValue(1);
        Animated.spring(this.springValue22, {
            toValue: 0.01,
            delay: 0,
            useNativeDriver: true,
            friction: 9
        }).start()

        Animated.spring(this.springValue23, {
            toValue: 900,
            delay: 0,
            useNativeDriver: true,
            friction: 9
        }).start()
    }


    spring(button) {

        const spring_content = {
            toValue: 1,
            delay: 0,
            useNativeDriver: true,
            friction: 1
        }

        switch (button) {
            case 0:
                this.springValue0.setValue(1.2);
                Animated.spring(this.springValue0, spring_content).start()
                break;

            case 1:
                this.springValue1.setValue(1.2);
                Animated.spring(this.springValue1, spring_content).start()
                break;

            case 2:
                this.springValue2.setValue(1.2);
                Animated.spring(this.springValue2, spring_content).start()
                break;

            case 3:
                this.springValue3.setValue(1.2);
                Animated.spring(this.springValue3, spring_content).start()
                break;

            case 4:
                this.springValue4.setValue(1.2);
                Animated.spring(this.springValue4, spring_content).start()
                break;

            case 5:
                this.springValue5.setValue(1.2);
                Animated.spring(this.springValue5, spring_content).start()
                break;

            case 6:
                this.springValue6.setValue(1.2);
                Animated.spring(this.springValue6, spring_content).start()
                break;

            case 7:
                this.springValue7.setValue(1.2);
                Animated.spring(this.springValue7, spring_content).start()
                break;

            case 8:
                this.springValue8.setValue(1.2);
                Animated.spring(this.springValue8, spring_content).start()
                break;

            case 9:
                this.springValue9.setValue(1.2);
                Animated.spring(this.springValue9, spring_content).start()
                break;

            case 10:
                this.springValue10.setValue(1.2);
                Animated.spring(this.springValue10, spring_content).start()
                break;

            case 11:
                this.springValue11.setValue(1.2);
                Animated.spring(this.springValue11, spring_content).start()
                break;

            case 12:
                this.springValue12.setValue(1.2);
                Animated.spring(this.springValue12, spring_content).start()
                break;

            case 13:
                this.springValue13.setValue(1.2);
                Animated.spring(this.springValue13, spring_content).start()
                break;

            case 14:
                this.springValue14.setValue(1.2);
                Animated.spring(this.springValue14, spring_content).start()
                break;
        }


        this.state.animated.setValue(0);
        Animated.timing(this.state.animated, {
            toValue: 1,
            duration: 450,
            delay: 0,
        }).start();
    }


    carouselAnim() {
        this.springValueCarousel.setValue(0.9);
        Animated.spring(this.springValueCarousel, {
            toValue: 1,
            delay: 0,
            useNativeDriver: true,
            friction: 4
        }).start()
    }

    
    solveEq() {

        var algebra = require('algebra.js');
        var Fraction = algebra.Fraction;
        var Expression = algebra.Expression;
        var Equation = algebra.Equation;

        var str = this.state.text;
        var n = str.indexOf("=");
        var left = str.slice(0, n - 1);
        var right = str.slice(n + 1, str.length);


        var x1 = algebra.parse(left.toString() + ' ');
        var x2 = algebra.parse(' ' + right.toString());


        var eq = new Equation(x1, x2);

        var answer = eq.solveFor("x");
        //  console.log(exp.toString());
        var x = this.state.videos.slice();
        var y = this.state.text;
        //  var sum = exp.summation("x", 3, 6);
        x[0] = {
            id: "0",
            title: y,
            tile_answer: answer.toString(),
        }
        this.setState({
            videos: x
        });




    }


    render = () => {
        // <StatusBar hidden={true} />
        const { navigate } = this.props.navigation;
        const menu = <Menu navigator={'ContentView'} />;

        if (this.state.fontLoaded) {
            return <AppLoading />;
        }

        const translateY = this.state.animated.interpolate({
            inputRange: [0, 1],
            outputRange: [-10, 0]
        });
        const transform = [{ translateY }];

        const opacity = this.state.animated.interpolate({
            inputRange: [0.5, 1],
            outputRange: [0.5, 1]
        });

        return (
            <SideMenu menu={menu} menuPosition='left' openMenuOffset={300}>


                <LinearGradient colors={['#31343B', '#1A1C23',]} start={[0, 0]} end={[1, 1]}>
                    <Animated.View style={{ transform: [{ scale: this.springValueCarousel }] }}>
                        <Carousel
                            ref={(c) => { this._carousel = c; }}
                            data={this.state.videos}
                            renderItem={this._renderItem.bind(this)}
                            sliderWidth={Dimensions.get('window').width}
                            itemWidth={Dimensions.get('window').width}
                            sliderHeight={400}
                            itemHeight={400}
                            layout={'tinder'}
                            firstItem={Platform.OS === 'ios' ? 0 : this.state.videos.length - 1}
                            layoutCardOffset={20}
                        />
                    </Animated.View>
                    <View style={{
                        width: 5,
                        height: 30,
                        borderRadius: 50,
                        marginLeft: 5,
                        backgroundColor: "#2BE2B1",
                        position: "absolute",
                        top: Dimensions.get('window').height / 2
                    }}>
                    </View>

                    <ScrollView>
                        <View>
                            <View style={{
                                flexDirection: 'row', width: Dimensions.get('window').width,
                                height: Dimensions.get('window').height - ((Dimensions.get('window').height / 3.5) + 70),
                                alignSelf: "center", flexWrap: "wrap", justifyContent: 'center'
                            }}>
                                <TouchableHighlight
                                    onPress={() => {
                                        var temp = this.state.text;
                                        temp = temp.slice(0, temp.length - 1);
                                        this.setState({ text: temp }, () => { this.update() })
                                    }}
                                    style={styles.button_top_row}>
                                    <Image source={require('./assets/back.png')} style={{ height: 10, width: 17, alignSelf: 'center' }} />
                                </TouchableHighlight>


                                <TouchableHighlight
                                    onPress={() => {
                                        this.setState({ text: this.state.text + '(' }, () => { this.update() })
                                    }}
                                    style={styles.button_top_row}>
                                    <Text style={{ textAlign: 'center', marginTop: 0, color: "#3ADAB4", fontSize: 20 }}>(</Text>
                                </TouchableHighlight>


                                <TouchableHighlight
                                    onPress={() => { this.setState({ text: this.state.text + ')' }, () => { this.update() }) }}
                                    style={styles.button_top_row}>
                                    <Text style={{ textAlign: 'center', marginTop: 0, color: "#3ADAB4", fontSize: 20 }}>)</Text>
                                </TouchableHighlight>


                                <ModalDropdown options={this.state.favourites} dropdownTextStyle={styles.dropdownMenuText} dropdownStyle={styles.dropdownMenu}
                                    renderSeparator={() => <View />}
                                    showsVerticalScrollIndicator={false}
                                    onSelect={(idx, value) => this.setState({ text: this.state.text + value }, () => { this.update() })}
                                    style={styles.button_top_row}>
                                    <Image source={require('./assets/star_menu.png')} style={{ height: 13, width: 18, alignSelf: 'center' }} />
                                </ModalDropdown>


                                <TouchableWithoutFeedback
                                    onPress={() => { this.spring(0); this.setState({ text: this.state.text + '7' }, () => { this.update() }) }}>
                                    <Animated.View style={{ transform: [{ scale: this.springValue0 }] }}>
                                        <View style={styles.button}>
                                            <View><Text style={styles.buttontext}>7</Text></View>
                                        </View>
                                    </Animated.View>
                                </TouchableWithoutFeedback>


                                <TouchableWithoutFeedback
                                    onPress={() => { this.spring(0); this.setState({ text: this.state.text + '8' }, () => { this.update() }) }}>
                                    <Animated.View style={{ transform: [{ scale: this.springValue0 }] }}>
                                        <View style={styles.button}>
                                            <View><Text style={styles.buttontext}>8</Text></View>
                                        </View>
                                    </Animated.View>
                                </TouchableWithoutFeedback>


                                <Animated.View style={{ transform: [{ scale: this.springValue1 }] }}>
                                    <View style={styles.button}>
                                        <TouchableWithoutFeedback
                                            onPress={() => {
                                                requestAnimationFrame(() => {
                                                    this.spring(1); this.setState({ text: this.state.text + '9' }, () => { this.update() })
                                                })
                                            }}>
                                            <View><Text style={styles.buttontext}>9</Text></View>
                                        </TouchableWithoutFeedback>
                                    </View>
                                </Animated.View>


                                <TouchableWithoutFeedback
                                    onPress={() => { this.spring(2); this.setState({ text: this.state.text + '/' }, () => { this.update() }) }}
                                    style={styles.button}>
                                    <Animated.View style={{ transform: [{ scale: this.springValue2 }] }}>
                                        <View style={styles.button}>
                                            <View><Image source={require('./assets/division.png')} style={{ height: 13, width: 12, alignSelf: 'center' }} /></View>
                                        </View>
                                    </Animated.View>
                                </TouchableWithoutFeedback>



                                <TouchableWithoutFeedback
                                    onPress={() => { this.spring(3); this.setState({ text: this.state.text + '4' }, () => { this.update() }) }}
                                    style={styles.button}>
                                    <Animated.View style={{ transform: [{ scale: this.springValue3 }] }}>
                                        <View style={styles.button}>
                                            <View><Text style={styles.buttontext}>4</Text></View>
                                        </View>
                                    </Animated.View>
                                </TouchableWithoutFeedback>


                                <TouchableOpacity
                                    delayPressIn={0}
                                    delayPressOut={0}
                                    onPressOut={() => { requestAnimationFrame(() => { this.spring(4); this.setState({ text: this.state.text + '5' }, () => { this.update() }) }) }}>
                                    <Animated.View style={{ transform: [{ scale: this.springValue4 }] }}>
                                        <View style={styles.button}>
                                            <View><Text style={styles.buttontext}>5</Text></View>
                                        </View>
                                    </Animated.View>
                                </TouchableOpacity>


                                <TouchableOpacity
                                    delayPressIn={0}
                                    delayPressOut={0}
                                    onPressOut={() => { requestAnimationFrame(() => { this.spring(5); this.setState({ text: this.state.text + '6' }, () => { this.update() }) }) }}>
                                    <Animated.View style={{ transform: [{ scale: this.springValue5 }] }}>
                                        <View style={styles.button}>
                                            <View><Text style={styles.buttontext}>6</Text></View>
                                        </View>
                                    </Animated.View>
                                </TouchableOpacity>


                                <TouchableOpacity
                                    delayPressIn={0}
                                    delayPressOut={0}
                                    onPress={() => { requestAnimationFrame(() => { this.spring(6); this.setState({ text: this.state.text + '*' }, () => { this.update() }) }) }}>
                                    <Animated.View style={{ transform: [{ scale: this.springValue6 }] }}>
                                        <View style={styles.button}>
                                            <View><Text style={styles.buttontext}>x</Text></View>
                                        </View>
                                    </Animated.View>
                                </TouchableOpacity>


                                <TouchableOpacity
                                    onPress={() => { requestAnimationFrame(() => { this.spring(7); this.setState({ text: this.state.text + '1' }, () => { this.update() }) }) }}>
                                    <Animated.View style={{ transform: [{ scale: this.springValue7 }] }} >
                                        <View style={styles.button}>
                                            <View><Text style={styles.buttontext}>1</Text></View>
                                        </View>
                                    </Animated.View>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    delayPressIn={0}
                                    delayPressOut={0}
                                    onPress={() => { requestAnimationFrame(() => { this.spring(8); this.setState({ text: this.state.text + '2' }, () => { this.update() }) }) }}>
                                    <Animated.View style={{ transform: [{ scale: this.springValue8 }] }}>
                                        <View style={styles.button}>
                                            <View><Text style={styles.buttontext}>2</Text></View>
                                        </View>
                                    </Animated.View>
                                </TouchableOpacity>


                                <TouchableOpacity
                                    delayPressIn={0}
                                    delayPressOut={0}
                                    onPress={() => { requestAnimationFrame(() => { this.spring(9); this.setState({ text: this.state.text + '3' }, () => { this.update() }) }) }}>
                                    <Animated.View style={{ transform: [{ scale: this.springValue9 }] }}>
                                        <View style={styles.button}>
                                            <View><Text style={styles.buttontext}>3</Text></View>
                                        </View>
                                    </Animated.View>
                                </TouchableOpacity>


                                <TouchableOpacity
                                    delayPressIn={0}
                                    delayPressOut={0}
                                    onPress={() => { requestAnimationFrame(() => { this.spring(10); this.setState({ text: this.state.text + '+' }, () => { this.update() }) }) }}>
                                    <Animated.View style={{ transform: [{ scale: this.springValue10 }] }}>
                                        <View style={styles.button}>
                                            <View><Text style={styles.buttontext}>+</Text></View>
                                        </View>
                                    </Animated.View>
                                </TouchableOpacity>


                                <TouchableOpacity
                                    delayPressIn={0}
                                    delayPressOut={0}
                                    onPress={() => { requestAnimationFrame(() => { this.spring(11); this.setState({ text: this.state.text + '.' }, () => { this.update() }) }) }}>
                                    <Animated.View style={{ transform: [{ scale: this.springValue11 }] }}>
                                        <View style={styles.button}>
                                            <View><Text style={styles.buttontext}>.</Text></View>
                                        </View>
                                    </Animated.View>
                                </TouchableOpacity>


                                <TouchableOpacity
                                    delayPressIn={0}
                                    delayPressOut={0}
                                    onPress={() => { requestAnimationFrame(() => { this.spring(12); this.setState({ text: this.state.text + '0' }, () => { this.update() }) }) }}>
                                    <Animated.View style={{ transform: [{ scale: this.springValue12 }] }}>
                                        <View style={styles.button}>
                                            <View><Text style={styles.buttontext}>0</Text></View>
                                        </View>
                                    </Animated.View>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    delayPressIn={0}
                                    delayPressOut={0}
                                    onPress={() => { requestAnimationFrame(() => { this.spring(13); this.setState({ text: this.state.text + '-' }, () => { this.update() }) }) }}>
                                    <Animated.View style={{ transform: [{ scale: this.springValue13 }] }}>
                                        <View style={styles.button}>
                                            <View><Text style={styles.buttontext}>-</Text></View>
                                        </View>
                                    </Animated.View>
                                </TouchableOpacity>


                                 <TouchableWithoutFeedback
                                    onPress={() => { this.spring(14); this.solveEq() }}
                                    style={styles.button}>
                                    <Animated.View style={{ transform: [{ scale: this.springValue14 }] }}>
                                        <View style={styles.button}>
                                            <View><Text style={styles.buttontext}>solve</Text></View>
                                        </View>
                                    </Animated.View>
                                </TouchableWithoutFeedback>
                            </View>
                            <View style={{
                                width: 30,
                                height: 5,
                                borderRadius: 50,
                                backgroundColor: "#2BE2B1",
                                alignSelf: 'center',
                                bottom: 5,
                            }}><Text></Text>
                            </View>
                        </View>


                        <View style={{ margin: 0 }}><Text></Text></View>


                        <View>
                            <View style={{
                                flexDirection: 'row', width: Dimensions.get('window').width, height: this.state.h, alignSelf: "center", flexWrap: "wrap", justifyContent: 'center'
                            }}>


                                <TouchableHighlight
                                    onPress={() =>
                                        navigate('History', { name: 'History' })
                                    }
                                    style={{
                                        backgroundColor: 'rgba(43, 226, 177, 0.1)',
                                        width: 320,
                                        height: 50,
                                        borderRadius: 50,
                                        alignSelf: 'center',
                                        justifyContent: 'center',
                                        margin: Dimensions.get('window').width / 70,
                                        marginTop: (((Dimensions.get('window').height) - 625) / 7),
                                    }}>
                                    <Text adjustsFontSizeToFit={true} numberOfLines={1} style={{ fontFamily: 'ample5', fontSize: 22, lineHeight: 62, color: 'white', textAlign: "center", }}> Expression Solver (Beta)</Text>
                                </TouchableHighlight>



                                <View style={{
                                    backgroundColor: "#545761", flexDirection: 'row', height: 50, borderRadius: 50, margin: Dimensions.get('window').width / 70,
                                    marginTop: (((Dimensions.get('window').height) - 625) / 7),
                                }}>
                                    <TouchableHighlight
                                        onPress={() => { this.toggle_scientific(); this.setState({ h: (Dimensions.get('window').height) * 1.1, scientific_bg: '#757883', statistics_bg: 'rgba(43, 226, 177, 0)' }) }}
                                        style={{
                                            backgroundColor: this.state.scientific_bg,
                                            width: 160,
                                            height: 50,
                                            borderRadius: 50,
                                            alignSelf: 'center',
                                            justifyContent: 'center',
                                        }}>
                                        <Text style={{ fontFamily: 'ample5', lineHeight: 62, fontSize: 22, color: 'white', textAlign: "center", }}>Scientific</Text>
                                    </TouchableHighlight>

                                    <TouchableHighlight
                                        onPress={() => { this.toggle_statistics(); this.setState({ h: (Dimensions.get('window').height), statistics_bg: '#757883', scientific_bg: 'rgba(43, 226, 177, 0)' }) }}
                                        style={{
                                            backgroundColor: this.state.statistics_bg,
                                            width: 160,
                                            height: 50,
                                            borderRadius: 50,
                                            alignSelf: 'center',
                                            justifyContent: 'center',
                                        }}>
                                        <Text style={{ fontFamily: 'ample5', lineHeight: 62, fontSize: 22, color: 'white', textAlign: "center", }}>Statistics</Text>
                                    </TouchableHighlight>
                                </View>



                                <Animated.View style={{
                                    transform: [{ scale: this.springValue20 }],
                                    flexDirection: 'row', width: Dimensions.get('window').width, alignSelf: "center", flexWrap: "wrap", justifyContent: 'center'
                                }}>


                                <Animated.View style={{ transform: [{ scale: this.springValue12 }] }}>
                                    <View style={styles.button}>
                                        <TouchableWithoutFeedback
                                            onPress={() => { this.spring(12); this.setState({ text: 'x^2+17/4x-15/4 = 0' }, () => { this.update() }) }}
                                            style={styles.button}>
                                            <View><Text style={styles.buttontext}>z</Text></View>
                                        </TouchableWithoutFeedback>
                                    </View>
                                </Animated.View>


                                    <TouchableHighlight
                                        onPress={() => { this.setState({ text: this.state.text + ' = ' }, () => { this.update() }) }}
                                        style={styles.button}>
                                        <Text style={{
                                            lineHeight: 93,
                                            fontFamily: 'ample5',
                                            textAlign: "center",
                                            fontSize: 25,
                                            color: "white",
                                        }}>=</Text>
                                    </TouchableHighlight>


                                    <TouchableHighlight
                                        onPress={() => { this.setState({ text: this.state.text + 'tan(' }, () => { this.update() }) }}
                                        style={styles.button}>
                                        <Text style={{
                                            lineHeight: 93,
                                            fontFamily: 'ample5',
                                            textAlign: "center",
                                            fontSize: 25,
                                            color: "white",
                                        }}>tan</Text>
                                    </TouchableHighlight>


                                    <TouchableHighlight
                                        onPress={() => { this.setState({ text: this.state.text + 'log10' }, () => { this.update() }) }}
                                        style={styles.button}>
                                        <Text style={{
                                            lineHeight: 93,
                                            fontFamily: 'ample5',
                                            textAlign: "center",
                                            fontSize: 25,
                                            color: "white",
                                        }}>log10</Text>
                                    </TouchableHighlight>


                                    <TouchableHighlight
                                        onPress={() => { this.setState({ text: this.state.text + 'log' }, () => { this.update() }) }}
                                        style={styles.button}>
                                        <Text style={{
                                            lineHeight: 93,
                                            fontFamily: 'ample5',
                                            textAlign: "center",
                                            fontSize: 25,
                                            color: "white",
                                        }}>log</Text>
                                    </TouchableHighlight>


                                    <TouchableHighlight
                                        onPress={() => { this.setState({ text: this.state.text + 'sqrt(' }, () => { this.update() }) }}
                                        style={styles.button}>
                                        <Text style={{
                                            lineHeight: 93,
                                            fontFamily: 'ample5',
                                            textAlign: "center",
                                            fontSize: 25,
                                            color: "white",
                                        }}>sqrt</Text>
                                    </TouchableHighlight>


                                    <TouchableHighlight
                                        onPress={() => { this.setState({ text: this.state.text + 'e' }, () => { this.update() }) }}
                                        style={styles.button}>
                                        <Text style={{
                                            lineHeight: 93,
                                            fontFamily: 'ample5',
                                            textAlign: "center",
                                            fontSize: 25,
                                            color: "white",
                                        }}>e</Text>
                                    </TouchableHighlight>


                                    <TouchableHighlight
                                        onPress={() => { this.setState({ text: this.state.text + '^' }, () => { this.update() }) }}
                                        style={styles.button}>
                                        <Text style={{
                                            lineHeight: 93,
                                            fontFamily: 'ample5',
                                            textAlign: "center",
                                            fontSize: 25,
                                            color: "white",
                                        }}>^</Text>
                                    </TouchableHighlight>


                                    <TouchableHighlight
                                        onPress={() => { this.setState({ text: this.state.text + 'cosh' }, () => { this.update() }) }}
                                        style={styles.button}>
                                        <Text style={{
                                            lineHeight: 93,
                                            fontFamily: 'ample5',
                                            textAlign: "center",
                                            fontSize: 25,
                                            color: "white",
                                        }}>cosh</Text>
                                    </TouchableHighlight>


                                    <TouchableHighlight
                                        onPress={() => { this.setState({ text: this.state.text + 'sinh' }, () => { this.update() }) }}
                                        style={styles.button}>
                                        <Text style={{
                                            lineHeight: 93,
                                            fontFamily: 'ample5',
                                            textAlign: "center",
                                            fontSize: 25,
                                            color: "white",
                                        }}>sinh</Text>
                                    </TouchableHighlight>


                                    <TouchableHighlight
                                        onPress={() => { this.setState({ text: this.state.text + 'tanh' }, () => { this.update() }) }}
                                        style={styles.button}>
                                        <Text style={{
                                            lineHeight: 93,
                                            fontFamily: 'ample5',
                                            textAlign: "center",
                                            fontSize: 25,
                                            color: "white",
                                        }}>tanh</Text>
                                    </TouchableHighlight>

                                    <TouchableHighlight
                                        onPress={() => { this.setState({ text: this.state.text + 'asin' }, () => { this.update() }) }}
                                        style={styles.button}>
                                        <Text style={{
                                            lineHeight: 93,
                                            fontFamily: 'ample5',
                                            textAlign: "center",
                                            fontSize: 25,
                                            color: "white",
                                        }}>asin</Text>
                                    </TouchableHighlight>

                                    <TouchableHighlight
                                        onPress={() => { this.setState({ text: this.state.text + 'atan' }, () => { this.update() }) }}
                                        style={styles.button}>
                                        <Text style={{
                                            lineHeight: 93,
                                            fontFamily: 'ample5',
                                            textAlign: "center",
                                            fontSize: 25,
                                            color: "white",
                                        }}>atan</Text>
                                    </TouchableHighlight>

                                    <TouchableHighlight
                                        onPress={() => { this.setState({ text: this.state.text + 'acos' }, () => { this.update() }) }}
                                        style={styles.button}>
                                        <Text style={{
                                            lineHeight: 93,
                                            fontFamily: 'ample5',
                                            textAlign: "center",
                                            fontSize: 25,
                                            color: "white",
                                        }}>acos</Text>
                                    </TouchableHighlight>

                                    <TouchableHighlight
                                        onPress={() => { this.setState({ text: this.state.text + 'acos' }, () => { this.update() }) }}
                                        style={styles.button}>
                                        <Text style={{
                                            lineHeight: 93,
                                            fontFamily: 'ample5',
                                            textAlign: "center",
                                            fontSize: 25,
                                            color: "white",
                                        }}>pi</Text>
                                    </TouchableHighlight>

                                    <TouchableHighlight
                                        onPress={() => { this.setState({ text: this.state.text + 'nroot(' }, () => { this.update() }) }}
                                        style={styles.button}>
                                        <Text style={{
                                            lineHeight: 93,
                                            fontFamily: 'ample5',
                                            textAlign: "center",
                                            fontSize: 25,
                                            color: "white",
                                        }}>nroot</Text>
                                    </TouchableHighlight>

                                </Animated.View>


                                <Animated.View style={{
                                    transform: [{ translateY: this.springValue21 }, { scale: this.springValue22 }],
                                    flexDirection: 'row', width: Dimensions.get('window').width, alignSelf: "center", flexWrap: "wrap", justifyContent: 'center'
                                }}>
                                    <TouchableHighlight
                                        onPress={() => { this.setState({ text: this.state.text + 'mad(' }, () => { this.update() }) }}
                                        style={styles.button}>
                                        <Text style={{
                                            lineHeight: 93,
                                            fontFamily: 'ample5',
                                            textAlign: "center",
                                            fontSize: 25,
                                            color: "white",
                                        }}>mad</Text>
                                    </TouchableHighlight>


                                    <TouchableHighlight
                                        onPress={() => { this.setState({ text: this.state.text + 'max(' }, () => { this.update() }) }}
                                        style={styles.button}>
                                        <Text style={{
                                            lineHeight: 93,
                                            fontFamily: 'ample5',
                                            textAlign: "center",
                                            fontSize: 25,
                                            color: "white",
                                        }}>max</Text>
                                    </TouchableHighlight>


                                    <TouchableHighlight
                                        onPress={() => { this.setState({ text: this.state.text + 'mean(' }, () => { this.update() }) }}
                                        style={styles.button}>
                                        <Text style={{
                                            lineHeight: 93,
                                            fontFamily: 'ample5',
                                            textAlign: "center",
                                            fontSize: 25,
                                            color: "white",
                                        }}>mean</Text>
                                    </TouchableHighlight>


                                    <TouchableHighlight
                                        onPress={() => { this.setState({ text: this.state.text + 'median(' }, () => { this.update() }) }}
                                        style={styles.button}>
                                        <Text style={{
                                            lineHeight: 93,
                                            fontFamily: 'ample5',
                                            textAlign: "center",
                                            fontSize: 25,
                                            color: "white",
                                        }}>median</Text>
                                    </TouchableHighlight>


                                    <TouchableHighlight
                                        onPress={() => { this.setState({ text: this.state.text + 'min(' }, () => { this.update() }) }}
                                        style={styles.button}>
                                        <Text style={{
                                            lineHeight: 93,
                                            fontFamily: 'ample5',
                                            textAlign: "center",
                                            fontSize: 25,
                                            color: "white",
                                        }}>min</Text>
                                    </TouchableHighlight>


                                    <TouchableHighlight
                                        onPress={() => { this.setState({ text: this.state.text + 'mode(' }, () => { this.update() }) }}
                                        style={styles.button}>
                                        <Text style={{
                                            lineHeight: 93,
                                            fontFamily: 'ample5',
                                            textAlign: "center",
                                            fontSize: 25,
                                            color: "white",
                                        }}>mode</Text>
                                    </TouchableHighlight>


                                    <TouchableHighlight
                                        onPress={() => { this.setState({ text: this.state.text + 'prod(' }, () => { this.update() }) }}
                                        style={styles.button}>
                                        <Text style={{
                                            lineHeight: 93,
                                            fontFamily: 'ample5',
                                            textAlign: "center",
                                            fontSize: 25,
                                            color: "white",
                                        }}>prod</Text>
                                    </TouchableHighlight>


                                    <TouchableHighlight
                                        onPress={() => { this.setState({ text: this.state.text + 'quant(' }, () => { this.update() }) }}
                                        style={styles.button}>
                                        <Text style={{
                                            lineHeight: 93,
                                            fontFamily: 'ample5',
                                            textAlign: "center",
                                            fontSize: 25,
                                            color: "white",
                                        }}>quant</Text>
                                    </TouchableHighlight>


                                    <TouchableHighlight
                                        onPress={() => { this.setState({ text: this.state.text + 'std(' }, () => { this.update() }) }}
                                        style={styles.button}>
                                        <Text style={{
                                            lineHeight: 93,
                                            fontFamily: 'ample5',
                                            textAlign: "center",
                                            fontSize: 25,
                                            color: "white",
                                        }}>std</Text>
                                    </TouchableHighlight>


                                    <TouchableHighlight
                                        onPress={() => { this.setState({ text: this.state.text + 'sum(' }, () => { this.update() }) }}
                                        style={styles.button}>
                                        <Text style={{
                                            lineHeight: 93,
                                            fontFamily: 'ample5',
                                            textAlign: "center",
                                            fontSize: 25,
                                            color: "white",
                                        }}>sum</Text>
                                    </TouchableHighlight>


                                    <TouchableHighlight
                                        onPress={() => { this.setState({ text: this.state.text + 'var(' }, () => { this.update() }) }}
                                        style={styles.button}>
                                        <Text style={{
                                            lineHeight: 93,
                                            fontFamily: 'ample5',
                                            textAlign: "center",
                                            fontSize: 25,
                                            color: "white",
                                        }}>var</Text>
                                    </TouchableHighlight>

                                    <TouchableHighlight
                                        onPress={() => { this.setState({ text: this.state.text + ',' }, () => { this.update() }) }}
                                        style={styles.button}>
                                        <Text style={{
                                            lineHeight: 93,
                                            fontFamily: 'ample5',
                                            textAlign: "center",
                                            fontSize: 25,
                                            color: "white",
                                        }}>,</Text>
                                    </TouchableHighlight>
                                </Animated.View>


                            </View>
                        </View>


                    </ScrollView>
                </LinearGradient>
            </SideMenu>
        );
    }

}

const styles = StyleSheet.create({
    dropdown_2: {
        alignSelf: 'flex-end',
        width: 150,
        marginTop: 32,
        right: 8,
        borderWidth: 0,
        borderRadius: 3,
        backgroundColor: 'cornflowerblue',
    },
    dropdown_2_text: {
        marginVertical: 10,
        marginHorizontal: 6,
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    dropdown_2_dropdown: {
        width: 150,
        height: 300,
        borderColor: 'cornflowerblue',
        borderWidth: 2,
        borderRadius: 3,
    },
    dropdown_2_row: {
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
    },
    dropdown_2_image: {
        marginLeft: 4,
        width: 30,
        height: 30,
    },
    dropdown_2_row_text: {
        marginHorizontal: 4,
        fontSize: 16,
        color: 'navy',
        textAlignVertical: 'center',
    },
    dropdown_2_separator: {
        height: 1,
        backgroundColor: 'cornflowerblue',
    },

    toggle: {
        width: 120,
        backgroundColor: '#333',
        borderRadius: 3,
        padding: 5,
        fontSize: 14,
        alignSelf: 'center',
        textAlign: 'center',
        margin: 10,
        color: 'rgba(255, 255, 255, 1)',
    },

    toggledOn: {
        color: 'rgba(255, 33, 33, 1)',
        fontSize: 16,
        transform: [{ rotate: '8deg', }, { translateY: -20, },],
    },

    dropdownMenuSettings: {
        borderRadius: 10,
        borderWidth: 0,
        width: 'auto',
        height: 'auto',
        backgroundColor: "#282B33",
        shadowOffset: { width: 0, height: 0, }, shadowColor: 'black',
        shadowOpacity: 0.9,
        shadowRadius: 50,
        opacity: 0.9
    },

    dropdownMenu: {
        opacity: 0.95,
        borderRadius: 20,
        borderWidth: 0,
        width: 'auto',
        height: 300,
        backgroundColor: "#282B33",
        shadowOffset: { width: 0, height: 0, }, shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 50,
    },

    dropdownMenuText: {
        fontFamily: 'ample5',
        backgroundColor: 'rgba(0,0,0,0)',
        color: 'white',
        fontSize: 20,
        margin: 10,
        textAlign: 'center'
    },

    divider: {
        height: 25,
        width: 2,
        marginLeft: 35,
        marginRight: 35,
        opacity: 0.1

    },

    button_top_row: {
        backgroundColor: 'rgba(43, 226, 177, 0.1)',
        width: 73,
        height: 40,
        // borderWidth:1,
        borderRadius: 15,
        // color:'white',
        alignSelf: 'center',
        justifyContent: 'center',
        margin: Dimensions.get('window').width / 70,
        marginTop: (((Dimensions.get('window').height) - 625) / 7),
    },

    buttontext: {
        lineHeight: 93,
        fontFamily: 'ample5',
        textAlign: "center",
        fontSize: 30,
        color: "white",
    },

    container: {
        backgroundColor: 'red',
    },

    button: {

        //  transform: [{ scale: this.springValue }],
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        width: 73,
        height: 73,
        // borderWidth:1,
        borderRadius: 20,
        // color:'white',
        alignSelf: 'center',
        justifyContent: 'center',
        margin: Dimensions.get('window').width / 70,
        marginTop: (((Dimensions.get('window').height) - 625) / 7),
        // marginBottom:  ((Dimensions.get('window').height - ((Dimensions.get('window').height / 3.5)+70))/100)+4,

    },

    flatlist: {
        position: 'relative',
    },

    carousel: {
        backgroundColor: 'black',
        //top: 25,
        width: 400,
        height: 144,
        borderRadius: 0,
    }
});


