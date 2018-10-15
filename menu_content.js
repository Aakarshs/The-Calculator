import React from 'react';
import PropTypes from 'prop-types';
import {
    Picker,
    Dimensions,
    StyleSheet,
    ScrollView,
    View,
    Image,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    TouchableWithoutFeedback,
    Animated,
} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import { TextInput } from 'react-native-gesture-handler';
import DismissKeyboard from 'dismissKeyboard';
import { Keyboard } from 'react-native';
import { LinearGradient } from 'expo';
import { KeyboardAvoidingView } from 'react-native';
//import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { AppLoading, Font } from 'expo';

export default class Menu_content extends React.Component {
    constructor(props) {
        super(props);

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
        this.springValue15 = new Animated.Value(1);
        this.springValue16 = new Animated.Value(1);
        this.springValue17 = new Animated.Value(1);
        this.springValue18 = new Animated.Value(1);
        this.springValue19 = new Animated.Value(1);
        //this.springValue = new Animated.Value(0.3)
        this.springValue20 = new Animated.Value(1);
        this.springValue21 = new Animated.Value(1);
        this.springValue22 = new Animated.Value(1);
        //===================
        this.springValue23 = new Animated.Value(900);
        this.springValueSwitch = new Animated.Value(1);
        this.springValueSwitch2 = new Animated.Value(0);


        this.springValue = new Animated.Value(1);
        this.state = {
            arrow:'down',
            animated: new Animated.Value(0),
            text: 1,
            convertee: '',
            unit: 1,
            value1: 'ml',
            value2: 'l',
            amazing: 1,
            dropdown_options: ['l', 'ml'],
            inputValue: '',
            status: 'Volume',
            //status_image:'./assets/status_image/area_status.png',

            //Color
            Length: 'rgba(255,255,0,0.00)', Area: 'rgba(255,255,0,0.00)', Mass: 'rgba(255,255,0,0.00)', Volume: 'rgba(43, 226, 177, 0.1)',
            Volume_Flow_Rate: 'rgba(255,255,0,0.00)', Temperature: 'rgba(255,255,0,0.00)', Time: 'rgba(255,255,0,0.00)',
            Frequency: 'rgba(255,255,0,0.00)', Speed: 'rgba(255,255,0,0.00)', Pace: 'rgba(255,255,0,0.00)', Pressure: 'rgba(255,255,0,0.00)',
            Digital: 'rgba(255,255,0,0.00)', Illuminance: 'rgba(255,255,0,0.00)', Parts_Per: 'rgba(255,255,0,0.00)',
            Voltage: 'rgba(255,255,0,0.00)', Current: 'rgba(255,255,0,0.00)', Apparent_Power: 'rgba(255,255,0,0.00)',
            Reactive_Power: 'rgba(255,255,0,0.00)', Energy: 'rgba(255,255,0,0.00)', Reactie_Energy: 'rgba(255,255,0,0.00)',
            Angle: 'rgba(255,255,0,0.00)', Charge: 'rgba(255,255,0,0.00)', Force: 'rgba(255,255,0,0.00)', Acceleration: 'rgba(255,255,0,0.00)',
        }


        this.dropdown = this.dropdown.bind(this);
        this.valueSet1 = this.valueSet1.bind(this);
        this.valueSet2 = this.valueSet2.bind(this);
    }


    async componentDidMount() {
        // StatusBar.setBarStyle('light-content', true);
        // StatusBar.setHidden(true);
        await Font.loadAsync({
            'ample5': require('./assets/fonts/AmpleSoft-Regular4.ttf'),
        });
        this.setState({ fontLoaded: false });
    }


    dropdown() {
        var convert = require('convert-units');
        var ans = convert(this.state.text).from(this.state.value1).to(this.state.value2);
        this.setState({
            convertee: ans
        })
    }


    valueSet1(idx, value) {
        this.setState({
            value1: value
        }, () => this.dropdown());
    }


    valueSet2(idx, value) {
        this.setState({
            value2: value
        }, () => this.dropdown());

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

            case 15:
                this.springValue15.setValue(1.2);
                Animated.spring(this.springValue15, spring_content).start()
                break;

            case 16:
                this.springValue16.setValue(1.2);
                Animated.spring(this.springValue16, spring_content).start()
                break;

            case 17:
                this.springValue17.setValue(1.2);
                Animated.spring(this.springValue17, spring_content).start()
                break;

            case 18:
                this.springValue18.setValue(1.2);
                Animated.spring(this.springValue18, spring_content).start()
                break;

            case 19:
                this.springValue19.setValue(1.2);
                Animated.spring(this.springValue19, spring_content).start()
                break;

            case 20:
                this.springValue20.setValue(1.2);
                Animated.spring(this.springValue20, spring_content).start()
                break;

            case 21:
                this.springValue21.setValue(1.2);
                Animated.spring(this.springValue21, spring_content).start()
                break;

            case 22:
                this.springValue22.setValue(1.2);
                Animated.spring(this.springValue22, spring_content).start()
                break;
        }


        this.state.animated.setValue(0);
        Animated.timing(this.state.animated, {
            toValue: 1,
            duration: 450,
            delay: 0,
        }).start();
    }

    switchAnimation() {
        if(this.state.arrow==='down'){
            this.springValueSwitch.setValue(1);
            Animated.spring(this.springValueSwitch, {
                toValue: 0,
                delay: 0,
                useNativeDriver: true,
                friction: 6
            }).start()

            this.springValueSwitch2.setValue(0);
            Animated.spring(this.springValueSwitch2, {
                toValue: 1,
                delay: 0,
                useNativeDriver: true,
                friction: 6
            }).start()
    }

    else if(this.state.arrow==='up'){
        this.springValueSwitch.setValue(0);
        Animated.spring(this.springValueSwitch, {
            toValue: 1,
            delay: 0,
            useNativeDriver: true,
            friction: 6
        }).start()

        this.springValueSwitch2.setValue(1);
        Animated.spring(this.springValueSwitch2, {
            toValue: 0,
            delay: 0,
            useNativeDriver: true,
            friction: 6
        }).start()

    }
    }


    render() {
        return (
                  <TouchableWithoutFeedback onPress={() => { DismissKeyboard() }}>
                <LinearGradient colors={['#31333B', '#292B33',]} start={[0.5, 0.5]} end={[1, 1]} style={{ flex: 1, flexDirection: 'row' }}>
                    <ScrollView scrollEnabled={true}>
                        <View style={{ flex: 1, flexDirection: 'column' }}>


                            <Animated.View style={{ transform: [{ scale: this.springValue0 }], backgroundColor: this.state.Length, marginLeft: 5, height: 70, width: 70, borderRadius: 100, }}
                                onPress={() => {
                                    this.spring(0);
                                    this.setState({
                                        dropdown_options: ['mm', 'cm', 'm', 'in', 'ft-us', 'ft', 'fathom', 'mi', 'nMi'],
                                        value1: 'm',
                                        value2: 'cm',
                                        convertee: '',
                                        inputValue: ' ',
                                        status: 'Length',
                                        status_image: './assets/status_image/length_status.png',

                                        //Color
                                        Length: 'rgba(43, 226, 177, 0.1)', Area: 'rgba(255,255,0,0.00)', Mass: 'rgba(255,255,0,0.00)', Volume: 'rgba(255,255,0,0.00)',
                                        Volume_Flow_Rate: 'rgba(255,255,0,0.00)', Temperature: 'rgba(255,255,0,0.00)', Time: 'rgba(255,255,0,0.00)',
                                        Frequency: 'rgba(255,255,0,0.00)', Speed: 'rgba(255,255,0,0.00)', Pace: 'rgba(255,255,0,0.00)', Pressure: 'rgba(255,255,0,0.00)',
                                        Digital: 'rgba(255,255,0,0.00)', Illuminance: 'rgba(255,255,0,0.00)', Parts_Per: 'rgba(255,255,0,0.00)',
                                        Voltage: 'rgba(255,255,0,0.00)', Current: 'rgba(255,255,0,0.00)', Apparent_Power: 'rgba(255,255,0,0.00)',
                                        Reactive_Power: 'rgba(255,255,0,0.00)', Energy: 'rgba(255,255,0,0.00)', Reactive_Energy: 'rgba(255,255,0,0.00)',
                                        Angle: 'rgba(255,255,0,0.00)', Charge: 'rgba(255,255,0,0.00)', Force: 'rgba(255,255,0,0.00)', Acceleration: 'rgba(255,255,0,0.00)',
                                    })
                                }}>
                                <TouchableHighlight>
                                    <Image source={require('./assets/convert/length.png')} style={{ height: 35, width: 35, alignSelf: 'center', bottom: -17 }} />
                                </TouchableHighlight>
                            </Animated.View>

                            {/*==================================================================*/}

                            <Animated.View style={{ transform: [{ scale: this.springValue1 }] }}>
                                <TouchableHighlight style={{ backgroundColor: this.state.Area, marginLeft: 5, height: 70, width: 70, borderRadius: 100, }} onPress={() => {
                                    this.spring(1);
                                    this.setState({
                                        dropdown_options: ['mm2', 'cm2', 'm2', 'ha', 'km2', 'in2', 'ft2', 'ac', 'mi2'],
                                        value1: 'mm2',
                                        value2: 'cm2',
                                        convertee: '',
                                        inputValue: ' ',
                                        status: 'Area',
                                        status_image: './assets/status_image/area_status.png',
                                        //Color
                                        Length: 'rgba(255,255,0,0.00)', Area: 'rgba(43, 226, 177, 0.1)', Mass: 'rgba(255,255,0,0.00)', Volume: 'rgba(255,255,0,0.00)',
                                        Volume_Flow_Rate: 'rgba(255,255,0,0.00)', Temperature: 'rgba(255,255,0,0.00)', Time: 'rgba(255,255,0,0.00)',
                                        Frequency: 'rgba(255,255,0,0.00)', Speed: 'rgba(255,255,0,0.00)', Pace: 'rgba(255,255,0,0.00)', Pressure: 'rgba(255,255,0,0.00)',
                                        Digital: 'rgba(255,255,0,0.00)', Illuminance: 'rgba(255,255,0,0.00)', Parts_Per: 'rgba(255,255,0,0.00)',
                                        Voltage: 'rgba(255,255,0,0.00)', Current: 'rgba(255,255,0,0.00)', Apparent_Power: 'rgba(255,255,0,0.00)',
                                        Reactive_Power: 'rgba(255,255,0,0.00)', Energy: 'rgba(255,255,0,0.00)', Reactive_Energy: 'rgba(255,255,0,0.00)',
                                        Angle: 'rgba(255,255,0,0.00)', Charge: 'rgba(255,255,0,0.00)', Force: 'rgba(255,255,0,0.00)', Acceleration: 'rgba(255,255,0,0.00)',
                                    })
                                }}>
                                    <Image source={require('./assets/convert/area.png')} style={{ height: 35, width: 35, alignSelf: 'center', bottom: -17 }} />
                                </TouchableHighlight>
                            </Animated.View>

                            {/*==================================================================*/}
                            <Animated.View style={{ transform: [{ scale: this.springValue2 }] }}>
                                <TouchableHighlight style={{ backgroundColor: this.state.Mass, marginLeft: 5, height: 70, width: 70, borderRadius: 100, }} onPress={() => {
                                    this.spring(2);
                                    this.setState({
                                        dropdown_options: ['mcg', 'mg', 'g', 'kg', 'oz', 'lb', 'mt', 't'],
                                        value1: 'g',
                                        value2: 'kg',
                                        convertee: '',
                                        inputValue: ' ',
                                        status: 'Mass',
                                        status_image: './assets/status_image/mass_status.png',

                                        //Color
                                        Length: 'rgba(255,255,0,0.00)', Area: 'rgba(255,255,0,0.00)', Mass: 'rgba(43, 226, 177, 0.1)', Volume: 'rgba(255,255,0,0.00)',
                                        Volume_Flow_Rate: 'rgba(255,255,0,0.00)', Temperature: 'rgba(255,255,0,0.00)', Time: 'rgba(255,255,0,0.00)',
                                        Frequency: 'rgba(255,255,0,0.00)', Speed: 'rgba(255,255,0,0.00)', Pace: 'rgba(255,255,0,0.00)', Pressure: 'rgba(255,255,0,0.00)',
                                        Digital: 'rgba(255,255,0,0.00)', Illuminance: 'rgba(255,255,0,0.00)', Parts_Per: 'rgba(255,255,0,0.00)',
                                        Voltage: 'rgba(255,255,0,0.00)', Current: 'rgba(255,255,0,0.00)', Apparent_Power: 'rgba(255,255,0,0.00)',
                                        Reactive_Power: 'rgba(255,255,0,0.00)', Energy: 'rgba(255,255,0,0.00)', Reactive_Energy: 'rgba(255,255,0,0.00)',
                                        Angle: 'rgba(255,255,0,0.00)', Charge: 'rgba(255,255,0,0.00)', Force: 'rgba(255,255,0,0.00)', Acceleration: 'rgba(255,255,0,0.00)',
                                    })
                                }}>
                                    <Image source={require('./assets/convert/mass.png')} style={{ height: 35, width: 35, alignSelf: 'center', bottom: -17 }} />
                                </TouchableHighlight>
                            </Animated.View>

                            {/*==================================================================*/}
                            <Animated.View style={{ transform: [{ scale: this.springValue3 }] }}>
                                <TouchableHighlight style={{ backgroundColor: this.state.Volume, marginLeft: 5, height: 70, width: 70, borderRadius: 100, }} onPress={() => {
                                    this.spring(3);
                                    this.setState({
                                        dropdown_options: ['mm3', 'cm3', 'ml', 'l', 'kl', 'm3', 'km3', 'tsp', 'Tbs', 'in3', 'fl-oz', 'cup', 'pnt', 'qt', 'gal', 'ft3', 'yd3'],
                                        value1: 'mm3',
                                        value2: 'cm3',
                                        convertee: '',
                                        inputValue: ' ',
                                        status: 'Volume',
                                        status_image: './assets/status_image/volume_status.png',

                                        //Color
                                        Length: 'rgba(255,255,0,0.00)', Area: 'rgba(255,255,0,0.00)', Mass: 'rgba(255,255,0,0.00)', Volume: 'rgba(43, 226, 177, 0.1)',
                                        Volume_Flow_Rate: 'rgba(255,255,0,0.00)', Temperature: 'rgba(255,255,0,0.00)', Time: 'rgba(255,255,0,0.00)',
                                        Frequency: 'rgba(255,255,0,0.00)', Speed: 'rgba(255,255,0,0.00)', Pace: 'rgba(255,255,0,0.00)', Pressure: 'rgba(255,255,0,0.00)',
                                        Digital: 'rgba(255,255,0,0.00)', Illuminance: 'rgba(255,255,0,0.00)', Parts_Per: 'rgba(255,255,0,0.00)',
                                        Voltage: 'rgba(255,255,0,0.00)', Current: 'rgba(255,255,0,0.00)', Apparent_Power: 'rgba(255,255,0,0.00)',
                                        Reactive_Power: 'rgba(255,255,0,0.00)', Energy: 'rgba(255,255,0,0.00)', Reactive_Energy: 'rgba(255,255,0,0.00)',
                                        Angle: 'rgba(255,255,0,0.00)', Charge: 'rgba(255,255,0,0.00)', Force: 'rgba(255,255,0,0.00)', Acceleration: 'rgba(255,255,0,0.00)',
                                    })
                                }}>
                                    <Image source={require('./assets/convert/volume.png')} style={{ height: 35, width: 30, alignSelf: 'center', bottom: -17 }} />
                                </TouchableHighlight>
                            </Animated.View>
                            {/*==================================================================*/}

                            {/*
                            <TouchableHighlight style={{ backgroundColor: this.state.Volume_Flow_Rate, margin: 20 }} onPress={() => {
                                this.setState({
                                    dropdown_options: ['mm3/s', 'cm3/s', 'ml/s', 'cl/s', 'dl/s', 'l/s', 'l/min', 'l/h', 'kl/s',
                                        'kl/min', 'kl/h', 'm3/s', 'm3/min', 'm3/h', 'km3/s', 'tsp/s', 'Tbs/s', 'in3/s', 'in3/min', 'in3/h', 'fl-oz/s', 'fl-oz/min', 'fl-oz/h', 'cup/s', 'pnt/s', 'pnt/min', 'pnt/h',
                                        'qt/s', 'gal/s', 'gal/min', 'gal/h', 'ft3/s', 'ft3/min', 'ft3/h', 'yd3/s', 'yd3/min', 'yd3/h'],
                                    value1: 'mm3/s',
                                    value2: 'gal/h',
                                    convertee: '',
                                    inputValue: ' '
                                })
                            }}>
                                <Text>Volume Flow Rate</Text>
                            </TouchableHighlight>

                        */}

                            {/*==================================================================*/}
                            <Animated.View style={{ transform: [{ scale: this.springValue4 }] }}>
                                <TouchableHighlight style={{ backgroundColor: this.state.Temperature, marginLeft: 5, height: 70, width: 70, borderRadius: 100, }} onPress={() => {
                                    {/*TEMPERATURE*/ }
                                    this.spring(4);
                                    this.setState({
                                        dropdown_options: ['C', 'F', 'K', 'R'],
                                        value1: 'C',
                                        value2: 'F',
                                        convertee: '',
                                        inputValue: ' ',
                                        status: 'Temperature',
                                        status_image: './assets/status_image/temperature_status.png',

                                        //Color
                                        Length: 'rgba(255,255,0,0.00)', Area: 'rgba(255,255,0,0.00)', Mass: 'rgba(255,255,0,0.00)', Volume: 'rgba(255,255,0,0.00)',
                                        Volume_Flow_Rate: 'rgba(255,255,0,0.00)', Temperature: 'rgba(43, 226, 177, 0.1)', Time: 'rgba(255,255,0,0.00)',
                                        Frequency: 'rgba(255,255,0,0.00)', Speed: 'rgba(255,255,0,0.00)', Pace: 'rgba(255,255,0,0.00)', Pressure: 'rgba(255,255,0,0.00)',
                                        Digital: 'rgba(255,255,0,0.00)', Illuminance: 'rgba(255,255,0,0.00)', Parts_Per: 'rgba(255,255,0,0.00)',
                                        Voltage: 'rgba(255,255,0,0.00)', Current: 'rgba(255,255,0,0.00)', Apparent_Power: 'rgba(255,255,0,0.00)',
                                        Reactive_Power: 'rgba(255,255,0,0.00)', Energy: 'rgba(255,255,0,0.00)', Reactive_Energy: 'rgba(255,255,0,0.00)',
                                        Angle: 'rgba(255,255,0,0.00)', Charge: 'rgba(255,255,0,0.00)', Force: 'rgba(255,255,0,0.00)', Acceleration: 'rgba(255,255,0,0.00)',
                                    })
                                }}>
                                    <Image source={require('./assets/convert/temperature.png')} style={{ height: 35, width: 17, alignSelf: 'center', bottom: -17 }} />
                                </TouchableHighlight>
                            </Animated.View>

                            {/*==================================================================*/}
                            <Animated.View style={{ transform: [{ scale: this.springValue5 }] }}>
                                <TouchableHighlight style={{ backgroundColor: this.state.Time, marginLeft: 5, height: 70, width: 70, borderRadius: 100, }} onPress={() => {
                                    {/*TIME*/ }
                                    this.spring(5);
                                    this.setState({
                                        dropdown_options: ['ns', 'mu', 'ms', 's', 'min', 'h', 'd', 'week', 'month', 'year'],
                                        value1: 'month',
                                        value2: 'year',
                                        convertee: '',
                                        inputValue: ' ',
                                        status: 'Time',
                                        status_image: './assets/status_image/time_status.png',

                                        //Color
                                        Length: 'rgba(255,255,0,0.00)', Area: 'rgba(255,255,0,0.00)', Mass: 'rgba(255,255,0,0.00)', Volume: 'rgba(255,255,0,0.00)',
                                        Volume_Flow_Rate: 'rgba(255,255,0,0.00)', Temperature: 'rgba(255,255,0,0.00)', Time: 'rgba(43, 226, 177, 0.1)',
                                        Frequency: 'rgba(255,255,0,0.00)', Speed: 'rgba(255,255,0,0.00)', Pace: 'rgba(255,255,0,0.00)', Pressure: 'rgba(255,255,0,0.00)',
                                        Digital: 'rgba(255,255,0,0.00)', Illuminance: 'rgba(255,255,0,0.00)', Parts_Per: 'rgba(255,255,0,0.00)',
                                        Voltage: 'rgba(255,255,0,0.00)', Current: 'rgba(255,255,0,0.00)', Apparent_Power: 'rgba(255,255,0,0.00)',
                                        Reactive_Power: 'rgba(255,255,0,0.00)', Energy: 'rgba(255,255,0,0.00)', Reactive_Energy: 'rgba(255,255,0,0.00)',
                                        Angle: 'rgba(255,255,0,0.00)', Charge: 'rgba(255,255,0,0.00)', Force: 'rgba(255,255,0,0.00)', Acceleration: 'rgba(255,255,0,0.00)',
                                    })
                                }}>
                                    <Image source={require('./assets/convert/time.png')} style={{ height: 35, width: 35, alignSelf: 'center', bottom: -17 }} />
                                </TouchableHighlight>
                            </Animated.View>

                            {/*==================================================================*/}
                            <Animated.View style={{ transform: [{ scale: this.springValue6 }] }}>
                                <TouchableHighlight style={{ backgroundColor: this.state.Frequency, marginLeft: 5, height: 70, width: 70, borderRadius: 100, }} onPress={() => {
                                    {/*FREQUENCY*/ }
                                    this.spring(6);
                                    this.setState({
                                        dropdown_options: ['Hz', 'mHz', 'kHz', 'MHz', 'GHz', 'THz', 'rpm', 'deg/s', 'rad/s'],
                                        value1: 'Hz',
                                        value2: 'GHz',
                                        convertee: '',
                                        inputValue: ' ',
                                        status: 'Frequency',
                                        status_image: './assets/status_image/frequency_status.png',

                                        //Color
                                        Length: 'rgba(255,255,0,0.00)', Area: 'rgba(255,255,0,0.00)', Mass: 'rgba(255,255,0,0.00)', Volume: 'rgba(255,255,0,0.00)',
                                        Volume_Flow_Rate: 'rgba(255,255,0,0.00)', Temperature: 'rgba(255,255,0,0.00)', Time: 'rgba(255,255,0,0.00)',
                                        Frequency: 'rgba(43, 226, 177, 0.1)', Speed: 'rgba(255,255,0,0.00)', Pace: 'rgba(255,255,0,0.00)', Pressure: 'rgba(255,255,0,0.00)',
                                        Digital: 'rgba(255,255,0,0.00)', Illuminance: 'rgba(255,255,0,0.00)', Parts_Per: 'rgba(255,255,0,0.00)',
                                        Voltage: 'rgba(255,255,0,0.00)', Current: 'rgba(255,255,0,0.00)', Apparent_Power: 'rgba(255,255,0,0.00)',
                                        Reactive_Power: 'rgba(255,255,0,0.00)', Energy: 'rgba(255,255,0,0.00)', Reactive_Energy: 'rgba(255,255,0,0.00)',
                                        Angle: 'rgba(255,255,0,0.00)', Charge: 'rgba(255,255,0,0.00)', Force: 'rgba(255,255,0,0.00)', Acceleration: 'rgba(255,255,0,0.00)',
                                    })
                                }}>
                                    <Image source={require('./assets/convert/frequency.png')} style={{ height: 25, width: 35, alignSelf: 'center', bottom: -22 }} />
                                </TouchableHighlight>
                            </Animated.View>

                            {/*==================================================================*/}
                            <Animated.View style={{ transform: [{ scale: this.springValue7 }] }}>
                                <TouchableHighlight style={{ backgroundColor: this.state.Speed, marginLeft: 5, height: 70, width: 70, borderRadius: 100, }} onPress={() => {
                                    {/*SPEED*/ }
                                    this.spring(7);
                                    this.setState({
                                        dropdown_options: ['m/s', 'km/h', 'm/h', 'knot', 'ft/s'],
                                        value1: 'm/s',
                                        value2: 'km/h',
                                        convertee: '',
                                        inputValue: ' ',
                                        status: 'Speed',
                                        status_image: './assets/status_image/speed_status.png',

                                        //Color
                                        Length: 'rgba(255,255,0,0.00)', Area: 'rgba(255,255,0,0.00)', Mass: 'rgba(255,255,0,0.00)', Volume: 'rgba(255,255,0,0.00)',
                                        Volume_Flow_Rate: 'rgba(255,255,0,0.00)', Temperature: 'rgba(255,255,0,0.00)', Time: 'rgba(255,255,0,0.00)',
                                        Frequency: 'rgba(255,255,0,0.00)', Speed: 'rgba(43, 226, 177, 0.1)', Pace: 'rgba(255,255,0,0.00)', Pressure: 'rgba(255,255,0,0.00)',
                                        Digital: 'rgba(255,255,0,0.00)', Illuminance: 'rgba(255,255,0,0.00)', Parts_Per: 'rgba(255,255,0,0.00)',
                                        Voltage: 'rgba(255,255,0,0.00)', Current: 'rgba(255,255,0,0.00)', Apparent_Power: 'rgba(255,255,0,0.00)',
                                        Reactive_Power: 'rgba(255,255,0,0.00)', Energy: 'rgba(255,255,0,0.00)', Reactive_Energy: 'rgba(255,255,0,0.00)',
                                        Angle: 'rgba(255,255,0,0.00)', Charge: 'rgba(255,255,0,0.00)', Force: 'rgba(255,255,0,0.00)', Acceleration: 'rgba(255,255,0,0.00)',
                                    })
                                }}>
                                    <Image source={require('./assets/convert/speed.png')} style={{ height: 35, width: 35, alignSelf: 'center', bottom: -17 }} />
                                </TouchableHighlight>
                            </Animated.View>

                            {/*==================================================================*/}
                            <Animated.View style={{ transform: [{ scale: this.springValue8 }] }}>
                                <TouchableHighlight style={{ backgroundColor: this.state.Pace, marginLeft: 5, height: 70, width: 70, borderRadius: 100, }} onPress={() => {
                                    {/*PACE*/ }
                                    this.spring(8);
                                    this.setState({
                                        dropdown_options: ['s/m', 'min/km', 's/ft', 'min/km'],
                                        value1: 's/m',
                                        value2: 'min/km',
                                        convertee: '',
                                        inputValue: ' ',
                                        status: 'Pace',
                                        status_image: './assets/status_image/pace_status.png',

                                        //Color
                                        Length: 'rgba(255,255,0,0.00)', Area: 'rgba(255,255,0,0.00)', Mass: 'rgba(255,255,0,0.00)', Volume: 'rgba(255,255,0,0.00)',
                                        Volume_Flow_Rate: 'rgba(255,255,0,0.00)', Temperature: 'rgba(255,255,0,0.00)', Time: 'rgba(255,255,0,0.00)',
                                        Frequency: 'rgba(255,255,0,0.00)', Speed: 'rgba(255,255,0,0.00)', Pace: 'rgba(43, 226, 177, 0.1)', Pressure: 'rgba(255,255,0,0.00)',
                                        Digital: 'rgba(255,255,0,0.00)', Illuminance: 'rgba(255,255,0,0.00)', Parts_Per: 'rgba(255,255,0,0.00)',
                                        Voltage: 'rgba(255,255,0,0.00)', Current: 'rgba(255,255,0,0.00)', Apparent_Power: 'rgba(255,255,0,0.00)',
                                        Reactive_Power: 'rgba(255,255,0,0.00)', Energy: 'rgba(255,255,0,0.00)', Reactive_Energy: 'rgba(255,255,0,0.00)',
                                        Angle: 'rgba(255,255,0,0.00)', Charge: 'rgba(255,255,0,0.00)', Force: 'rgba(255,255,0,0.00)', Acceleration: 'rgba(255,255,0,0.00)',
                                    })
                                }}>
                                    <Image source={require('./assets/convert/pace.png')} style={{ height: 35, width: 29, alignSelf: 'center', bottom: -17 }} />
                                </TouchableHighlight>
                            </Animated.View>

                            {/*==================================================================*/}
                            <Animated.View style={{ transform: [{ scale: this.springValue9 }] }}>
                                <TouchableHighlight style={{ backgroundColor: this.state.Pressure, marginLeft: 5, height: 70, width: 70, borderRadius: 100, }} onPress={() => {
                                    {/*PRESSURE*/ }
                                    this.spring(9);
                                    this.setState({
                                        dropdown_options: ['Pa', 'hPa', 'kPa', 'MPa', 'bar', 'torr', 'psi', 'ksi'],
                                        value1: 'Pa',
                                        value2: 'hPa',
                                        convertee: '',
                                        inputValue: ' ',
                                        status: 'Pressure',
                                        status_image: './assets/status_image/pressure_status.png',

                                        //Color
                                        Length: 'rgba(255,255,0,0.00)', Area: 'rgba(255,255,0,0.00)', Mass: 'rgba(255,255,0,0.00)', Volume: 'rgba(255,255,0,0.00)',
                                        Volume_Flow_Rate: 'rgba(255,255,0,0.00)', Temperature: 'rgba(255,255,0,0.00)', Time: 'rgba(255,255,0,0.00)',
                                        Frequency: 'rgba(255,255,0,0.00)', Speed: 'rgba(255,255,0,0.00)', Pace: 'rgba(255,255,0,0.00)', Pressure: 'rgba(43, 226, 177, 0.1)',
                                        Digital: 'rgba(255,255,0,0.00)', Illuminance: 'rgba(255,255,0,0.00)', Parts_Per: 'rgba(255,255,0,0.00)',
                                        Voltage: 'rgba(255,255,0,0.00)', Current: 'rgba(255,255,0,0.00)', Apparent_Power: 'rgba(255,255,0,0.00)',
                                        Reactive_Power: 'rgba(255,255,0,0.00)', Energy: 'rgba(255,255,0,0.00)', Reactive_Energy: 'rgba(255,255,0,0.00)',
                                        Angle: 'rgba(255,255,0,0.00)', Charge: 'rgba(255,255,0,0.00)', Force: 'rgba(255,255,0,0.00)', Acceleration: 'rgba(255,255,0,0.00)',
                                    })
                                }}>
                                    <Image source={require('./assets/convert/pressure.png')} style={{ height: 25, width: 35, alignSelf: 'center', bottom: -24 }} />
                                </TouchableHighlight>
                            </Animated.View>


                            <Animated.View style={{ transform: [{ scale: this.springValue10 }] }}>
                                <TouchableHighlight style={{ backgroundColor: this.state.Digital, marginLeft: 5, height: 70, width: 70, borderRadius: 100, }} onPress={() => {
                                    {/*Digital*/ }
                                    this.spring(10);
                                    this.setState({
                                        dropdown_options: ['b', 'Kb', 'Mb', 'Gb', 'Tb', 'B', 'KB', 'MB', 'GB', 'TB'],
                                        value1: 'b',
                                        value2: 'Kb',
                                        convertee: '',
                                        inputValue: ' ',
                                        status: 'Digital',
                                        status_image: './assets/status_image/pressure_status.png',

                                        //Color
                                        Length: 'rgba(255,255,0,0.00)', Area: 'rgba(255,255,0,0.00)', Mass: 'rgba(255,255,0,0.00)', Volume: 'rgba(255,255,0,0.00)',
                                        Volume_Flow_Rate: 'rgba(255,255,0,0.00)', Temperature: 'rgba(255,255,0,0.00)', Time: 'rgba(255,255,0,0.00)',
                                        Frequency: 'rgba(255,255,0,0.00)', Speed: 'rgba(255,255,0,0.00)', Pace: 'rgba(255,255,0,0.00)', Pressure: 'rgba(255,255,0,0.00)',
                                        Digital: 'rgba(43, 226, 177, 0.1)', Illuminance: 'rgba(255,255,0,0.00)', Parts_Per: 'rgba(255,255,0,0.00)',
                                        Voltage: 'rgba(255,255,0,0.00)', Current: 'rgba(255,255,0,0.00)', Apparent_Power: 'rgba(255,255,0,0.00)',
                                        Reactive_Power: 'rgba(255,255,0,0.00)', Energy: 'rgba(255,255,0,0.00)', Reactive_Energy: 'rgba(255,255,0,0.00)',
                                        Angle: 'rgba(255,255,0,0.00)', Charge: 'rgba(255,255,0,0.00)', Force: 'rgba(255,255,0,0.00)', Acceleration: 'rgba(255,255,0,0.00)',
                                    })
                                }}>
                                    <Image source={require('./assets/convert/digital.png')} style={{ height: 30, width: 30, alignSelf: 'center', bottom: -20 }} />
                                </TouchableHighlight>
                            </Animated.View>


                            <Animated.View style={{ transform: [{ scale: this.springValue11 }] }}>
                                <TouchableHighlight style={{ backgroundColor: this.state.Illuminance, marginLeft: 5, height: 70, width: 70, borderRadius: 100, }} onPress={() => {
                                    {/*Illuminance*/ }
                                    this.spring(11);
                                    this.setState({
                                        dropdown_options: ['lx', 'ft-cd'],
                                        value1: 'lx',
                                        value2: 'ft-cd',
                                        convertee: '',
                                        inputValue: ' ',
                                        status: 'Illuminance',
                                        status_image: './assets/status_image/Illuminance.png',

                                        //Color
                                        Length: 'rgba(255,255,0,0.00)', Area: 'rgba(255,255,0,0.00)', Mass: 'rgba(255,255,0,0.00)', Volume: 'rgba(255,255,0,0.00)',
                                        Volume_Flow_Rate: 'rgba(255,255,0,0.00)', Temperature: 'rgba(255,255,0,0.00)', Time: 'rgba(255,255,0,0.00)',
                                        Frequency: 'rgba(255,255,0,0.00)', Speed: 'rgba(255,255,0,0.00)', Pace: 'rgba(255,255,0,0.00)', Pressure: 'rgba(255,255,0,0.00)',
                                        Digital: 'rgba(255,255,0,0.00)', Illuminance: 'rgba(43, 226, 177, 0.1)', Parts_Per: 'rgba(255,255,0,0.00)',
                                        Voltage: 'rgba(255,255,0,0.00)', Current: 'rgba(255,255,0,0.00)', Apparent_Power: 'rgba(255,255,0,0.00)',
                                        Reactive_Power: 'rgba(255,255,0,0.00)', Energy: 'rgba(255,255,0,0.00)', Reactive_Energy: 'rgba(255,255,0,0.00)',
                                        Angle: 'rgba(255,255,0,0.00)', Charge: 'rgba(255,255,0,0.00)', Force: 'rgba(255,255,0,0.00)', Acceleration: 'rgba(255,255,0,0.00)',
                                    })
                                }}>
                                    <Image source={require('./assets/convert/Illuminance.png')} style={{ height: 30, width: 30, alignSelf: 'center', bottom: -19 }} />
                                </TouchableHighlight>
                            </Animated.View>


                            <Animated.View style={{ transform: [{ scale: this.springValue12 }] }}>
                                <TouchableHighlight style={{ backgroundColor: this.state.Parts_Per, marginLeft: 5, height: 70, width: 70, borderRadius: 100, }} onPress={() => {
                                    {/*Illuminance*/ }
                                    this.spring(12);
                                    this.setState({
                                        dropdown_options: ['ppm', 'ppb', 'ppt', 'ppq'],
                                        value1: 'ppm',
                                        value2: 'ppb',
                                        convertee: '',
                                        inputValue: ' ',
                                        status: 'Parts-Per',
                                        status_image: './assets/status_image/Parts-Per.png',

                                        //Color
                                        Length: 'rgba(255,255,0,0.00)', Area: 'rgba(255,255,0,0.00)', Mass: 'rgba(255,255,0,0.00)', Volume: 'rgba(255,255,0,0.00)',
                                        Volume_Flow_Rate: 'rgba(255,255,0,0.00)', Temperature: 'rgba(255,255,0,0.00)', Time: 'rgba(255,255,0,0.00)',
                                        Frequency: 'rgba(255,255,0,0.00)', Speed: 'rgba(255,255,0,0.00)', Pace: 'rgba(255,255,0,0.00)', Pressure: 'rgba(255,255,0,0.00)',
                                        Digital: 'rgba(255,255,0,0.00)', Illuminance: 'rgba(255,255,0,0.00)', Parts_Per: 'rgba(43, 226, 177, 0.1)',
                                        Voltage: 'rgba(255,255,0,0.00)', Current: 'rgba(255,255,0,0.00)', Apparent_Power: 'rgba(255,255,0,0.00)',
                                        Reactive_Power: 'rgba(255,255,0,0.00)', Energy: 'rgba(255,255,0,0.00)', Reactive_Energy: 'rgba(255,255,0,0.00)',
                                        Angle: 'rgba(255,255,0,0.00)', Charge: 'rgba(255,255,0,0.00)', Force: 'rgba(255,255,0,0.00)', Acceleration: 'rgba(255,255,0,0.00)',
                                    })
                                }}>
                                    <Image source={require('./assets/convert/Parts_Per.png')} style={{ height: 25, width: 35, alignSelf: 'center', bottom: -23 }} />
                                </TouchableHighlight>
                            </Animated.View>


                            <Animated.View style={{ transform: [{ scale: this.springValue13 }] }}>
                                <TouchableHighlight style={{ backgroundColor: this.state.Voltage, marginLeft: 5, height: 70, width: 70, borderRadius: 100, }} onPress={() => {
                                    {/*Illuminance*/ }
                                    this.spring(13);
                                    this.setState({
                                        dropdown_options: ['V', 'mV', 'kV'],
                                        value1: 'V',
                                        value2: 'mV',
                                        convertee: '',
                                        inputValue: ' ',
                                        status: 'Voltage',
                                        status_image: './assets/status_image/Voltage.png',

                                        //Color
                                        Length: 'rgba(255,255,0,0.00)', Area: 'rgba(255,255,0,0.00)', Mass: 'rgba(255,255,0,0.00)', Volume: 'rgba(255,255,0,0.00)',
                                        Volume_Flow_Rate: 'rgba(255,255,0,0.00)', Temperature: 'rgba(255,255,0,0.00)', Time: 'rgba(255,255,0,0.00)',
                                        Frequency: 'rgba(255,255,0,0.00)', Speed: 'rgba(255,255,0,0.00)', Pace: 'rgba(255,255,0,0.00)', Pressure: 'rgba(255,255,0,0.00)',
                                        Digital: 'rgba(255,255,0,0.00)', Illuminance: 'rgba(255,255,0,0.00)', Parts_Per: 'rgba(255,255,0,0.00)',
                                        Voltage: 'rgba(43, 226, 177, 0.1)', Current: 'rgba(255,255,0,0.00)', Apparent_Power: 'rgba(255,255,0,0.00)',
                                        Reactive_Power: 'rgba(255,255,0,0.00)', Energy: 'rgba(255,255,0,0.00)', Reactive_Energy: 'rgba(255,255,0,0.00)',
                                        Angle: 'rgba(255,255,0,0.00)', Charge: 'rgba(255,255,0,0.00)', Force: 'rgba(255,255,0,0.00)', Acceleration: 'rgba(255,255,0,0.00)',
                                    })
                                }}>
                                    <Image source={require('./assets/convert/Voltage.png')} style={{ height: 30, width: 30, alignSelf: 'center', bottom: -20 }} />
                                </TouchableHighlight>
                            </Animated.View>



                            <Animated.View style={{ transform: [{ scale: this.springValue14 }] }}>
                                <TouchableHighlight style={{ backgroundColor: this.state.Current, marginLeft: 5, height: 70, width: 70, borderRadius: 100, }} onPress={() => {
                                    {/*Illuminance*/ }
                                    this.spring(14);
                                    this.setState({
                                        dropdown_options: ['A', 'mA', 'kA'],
                                        value1: 'A',
                                        value2: 'mA',
                                        convertee: '',
                                        inputValue: ' ',
                                        status: 'Current',
                                        status_image: './assets/status_image/Current.png',

                                        //Color
                                        Length: 'rgba(255,255,0,0.00)', Area: 'rgba(255,255,0,0.00)', Mass: 'rgba(255,255,0,0.00)', Volume: 'rgba(255,255,0,0.00)',
                                        Volume_Flow_Rate: 'rgba(255,255,0,0.00)', Temperature: 'rgba(255,255,0,0.00)', Time: 'rgba(255,255,0,0.00)',
                                        Frequency: 'rgba(255,255,0,0.00)', Speed: 'rgba(255,255,0,0.00)', Pace: 'rgba(255,255,0,0.00)', Pressure: 'rgba(255,255,0,0.00)',
                                        Digital: 'rgba(255,255,0,0.00)', Illuminance: 'rgba(255,255,0,0.00)', Parts_Per: 'rgba(255,255,0,0.00)',
                                        Voltage: 'rgba(255,255,0,0.00)', Current: 'rgba(43, 226, 177, 0.1)', Apparent_Power: 'rgba(255,255,0,0.00)',
                                        Reactive_Power: 'rgba(255,255,0,0.00)', Energy: 'rgba(255,255,0,0.00)', Reactive_Energy: 'rgba(255,255,0,0.00)',
                                        Angle: 'rgba(255,255,0,0.00)', Charge: 'rgba(255,255,0,0.00)', Force: 'rgba(255,255,0,0.00)', Acceleration: 'rgba(255,255,0,0.00)',
                                    })
                                }}>
                                    <Image source={require('./assets/convert/Current.png')} style={{ height: 30, width: 20, alignSelf: 'center', bottom: -23 }} />
                                </TouchableHighlight>
                            </Animated.View>



                            <Animated.View style={{ transform: [{ scale: this.springValue15 }] }}>
                                <TouchableHighlight style={{ backgroundColor: this.state.Power, marginLeft: 5, height: 70, width: 70, borderRadius: 100, }} onPress={() => {
                                    {/*Illuminance*/ }
                                    this.spring(15);
                                    this.setState({
                                        dropdown_options: ['W', 'mW', 'kW', 'MW', 'GW'],
                                        value1: 'W',
                                        value2: 'mW',
                                        convertee: '',
                                        inputValue: ' ',
                                        status: 'Power',
                                        status_image: './assets/status_image/Power.png',

                                        //Color
                                        Length: 'rgba(255,255,0,0.00)', Area: 'rgba(255,255,0,0.00)', Mass: 'rgba(255,255,0,0.00)', Volume: 'rgba(255,255,0,0.00)',
                                        Volume_Flow_Rate: 'rgba(255,255,0,0.00)', Temperature: 'rgba(255,255,0,0.00)', Time: 'rgba(255,255,0,0.00)',
                                        Frequency: 'rgba(255,255,0,0.00)', Speed: 'rgba(255,255,0,0.00)', Pace: 'rgba(255,255,0,0.00)', Pressure: 'rgba(255,255,0,0.00)',
                                        Digital: 'rgba(255,255,0,0.00)', Illuminance: 'rgba(43, 226, 177, 0.1)', Parts_Per: 'rgba(255,255,0,0.00)',
                                        Voltage: 'rgba(255,255,0,0.00)', Current: 'rgba(255,255,0,0.00)', Apparent_Power: 'rgba(255,255,0,0.00)',
                                        Reactive_Power: 'rgba(255,255,0,0.00)', Energy: 'rgba(255,255,0,0.00)', Reactive_Energy: 'rgba(255,255,0,0.00)',
                                        Angle: 'rgba(255,255,0,0.00)', Charge: 'rgba(255,255,0,0.00)', Force: 'rgba(255,255,0,0.00)', Acceleration: 'rgba(255,255,0,0.00)',
                                    })
                                }}>
                                    <Image source={require('./assets/convert/Power.png')} style={{ height: 30, width: 30, alignSelf: 'center', bottom: -17 }} />
                                </TouchableHighlight>
                            </Animated.View>



                            <Animated.View style={{ transform: [{ scale: this.springValue16 }] }}>
                                <TouchableHighlight style={{ backgroundColor: this.state.Apparent_Power, marginLeft: 5, height: 70, width: 70, borderRadius: 100, }} onPress={() => {
                                    {/*Illuminance*/ }
                                    this.spring(16);
                                    this.setState({
                                        dropdown_options: ['VA', 'mVA', 'kVA', 'MVA', 'GVA'],
                                        value1: 'lx',
                                        value2: 'ft-cd',
                                        convertee: '',
                                        inputValue: ' ',
                                        status: 'Apparent_Power',
                                        status_image: './assets/status_image/Apparent_Power.png',

                                        //Color
                                        Length: 'rgba(255,255,0,0.00)', Area: 'rgba(255,255,0,0.00)', Mass: 'rgba(255,255,0,0.00)', Volume: 'rgba(255,255,0,0.00)',
                                        Volume_Flow_Rate: 'rgba(255,255,0,0.00)', Temperature: 'rgba(255,255,0,0.00)', Time: 'rgba(255,255,0,0.00)',
                                        Frequency: 'rgba(255,255,0,0.00)', Speed: 'rgba(255,255,0,0.00)', Pace: 'rgba(255,255,0,0.00)', Pressure: 'rgba(255,255,0,0.00)',
                                        Digital: 'rgba(255,255,0,0.00)', Illuminance: 'rgba(255,255,0,0.00)', Parts_Per: 'rgba(255,255,0,0.00)',
                                        Voltage: 'rgba(255,255,0,0.00)', Current: 'rgba(255,255,0,0.00)', Apparent_Power: 'rgba(43, 226, 177, 0.1)',
                                        Reactive_Power: 'rgba(255,255,0,0.00)', Energy: 'rgba(255,255,0,0.00)', Reactive_Energy: 'rgba(255,255,0,0.00)',
                                        Angle: 'rgba(255,255,0,0.00)', Charge: 'rgba(255,255,0,0.00)', Force: 'rgba(255,255,0,0.00)', Acceleration: 'rgba(255,255,0,0.00)',
                                    })
                                }}>
                                    <Image source={require('./assets/convert/Apparent_Power.png')} style={{ height: 30, width: 30, alignSelf: 'center', bottom: -22 }} />
                                </TouchableHighlight>
                            </Animated.View>



                            <Animated.View style={{ transform: [{ scale: this.springValue17 }] }}>
                                <TouchableHighlight style={{ backgroundColor: this.state.Reactive_Power, marginLeft: 5, height: 70, width: 70, borderRadius: 100, }} onPress={() => {
                                    {/*Illuminance*/ }
                                    this.spring(17);
                                    this.setState({
                                        dropdown_options: ['VAR', 'mVAR', 'kVAR', 'MVAR', 'GVAR'],
                                        value1: 'VAR',
                                        value2: 'mVAR',
                                        convertee: '',
                                        inputValue: ' ',
                                        status: 'Reactive_Power',
                                        status_image: './assets/status_image/Reactive_Power.png',

                                        //Color
                                        Length: 'rgba(255,255,0,0.00)', Area: 'rgba(255,255,0,0.00)', Mass: 'rgba(255,255,0,0.00)', Volume: 'rgba(255,255,0,0.00)',
                                        Volume_Flow_Rate: 'rgba(255,255,0,0.00)', Temperature: 'rgba(255,255,0,0.00)', Time: 'rgba(255,255,0,0.00)',
                                        Frequency: 'rgba(255,255,0,0.00)', Speed: 'rgba(255,255,0,0.00)', Pace: 'rgba(255,255,0,0.00)', Pressure: 'rgba(255,255,0,0.00)',
                                        Digital: 'rgba(255,255,0,0.00)', Illuminance: 'rgba(255,255,0,0.00)', Parts_Per: 'rgba(255,255,0,0.00)',
                                        Voltage: 'rgba(255,255,0,0.00)', Current: 'rgba(255,255,0,0.00)', Apparent_Power: 'rgba(255,255,0,0.00)',
                                        Reactive_Power: 'rgba(43, 226, 177, 0.1)', Energy: 'rgba(255,255,0,0.00)', Reactive_Energy: 'rgba(255,255,0,0.00)',
                                        Angle: 'rgba(255,255,0,0.00)', Charge: 'rgba(255,255,0,0.00)', Force: 'rgba(255,255,0,0.00)', Acceleration: 'rgba(255,255,0,0.00)',
                                    })
                                }}>
                                    <Image source={require('./assets/convert/Reactive_Power.png')} style={{ height: 25, width: 32, alignSelf: 'center', bottom: -23 }} />
                                </TouchableHighlight>
                            </Animated.View>



                            <Animated.View style={{ transform: [{ scale: this.springValue18 }] }}>
                                <TouchableHighlight style={{ backgroundColor: this.state.Energy, marginLeft: 5, height: 70, width: 70, borderRadius: 100, }} onPress={() => {
                                    {/*Illuminance*/ }
                                    this.spring(18);
                                    this.setState({
                                        dropdown_options: ['Wh', 'mWh', 'kWh', 'MWh', 'GWh', 'J', 'kJ'],
                                        value1: 'Wh',
                                        value2: 'mWh',
                                        convertee: '',
                                        inputValue: ' ',
                                        status: 'Energy',
                                        status_image: './assets/status_image/Energy.png',

                                        //Color
                                        Length: 'rgba(255,255,0,0.00)', Area: 'rgba(255,255,0,0.00)', Mass: 'rgba(255,255,0,0.00)', Volume: 'rgba(255,255,0,0.00)',
                                        Volume_Flow_Rate: 'rgba(255,255,0,0.00)', Temperature: 'rgba(255,255,0,0.00)', Time: 'rgba(255,255,0,0.00)',
                                        Frequency: 'rgba(255,255,0,0.00)', Speed: 'rgba(255,255,0,0.00)', Pace: 'rgba(255,255,0,0.00)', Pressure: 'rgba(255,255,0,0.00)',
                                        Digital: 'rgba(255,255,0,0.00)', Illuminance: 'rgba(255,255,0,0.00)', Parts_Per: 'rgba(255,255,0,0.00)',
                                        Voltage: 'rgba(255,255,0,0.00)', Current: 'rgba(255,255,0,0.00)', Apparent_Power: 'rgba(255,255,0,0.00)',
                                        Reactive_Power: 'rgba(255,255,0,0.00)', Energy: 'rgba(43, 226, 177, 0.1)', Reactive_Energy: 'rgba(255,255,0,0.00)',
                                        Angle: 'rgba(255,255,0,0.00)', Charge: 'rgba(255,255,0,0.00)', Force: 'rgba(255,255,0,0.00)', Acceleration: 'rgba(255,255,0,0.00)',
                                    })
                                }}>
                                    <Image source={require('./assets/convert/Energy.png')} style={{ height: 30, width: 28, alignSelf: 'center', bottom: -21 }} />
                                </TouchableHighlight>
                            </Animated.View>


                            <Animated.View style={{ transform: [{ scale: this.springValue19 }] }}>
                                <TouchableHighlight style={{ backgroundColor: this.state.Reactive_Energy, marginLeft: 5, height: 70, width: 70, borderRadius: 100, }} onPress={() => {
                                    {/*Reactive_Energy*/ }
                                    this.spring(19);
                                    this.setState({
                                        dropdown_options: ['VARh', 'mVARh', 'kVARh', 'MVARh', 'GVARh'],
                                        value1: 'VARh',
                                        value2: 'mVARh',
                                        convertee: '',
                                        inputValue: ' ',
                                        status: 'Reactive_Energy',
                                        status_image: './assets/status_image/Reactive_Energy.png',

                                        //Color
                                        Length: 'rgba(255,255,0,0.00)', Area: 'rgba(255,255,0,0.00)', Mass: 'rgba(255,255,0,0.00)', Volume: 'rgba(255,255,0,0.00)',
                                        Volume_Flow_Rate: 'rgba(255,255,0,0.00)', Temperature: 'rgba(255,255,0,0.00)', Time: 'rgba(255,255,0,0.00)',
                                        Frequency: 'rgba(255,255,0,0.00)', Speed: 'rgba(255,255,0,0.00)', Pace: 'rgba(255,255,0,0.00)', Pressure: 'rgba(255,255,0,0.00)',
                                        Digital: 'rgba(255,255,0,0.00)', Illuminance: 'rgba(255,255,0,0.00)', Parts_Per: 'rgba(255,255,0,0.00)',
                                        Voltage: 'rgba(255,255,0,0.00)', Current: 'rgba(255,255,0,0.00)', Apparent_Power: 'rgba(255,255,0,0.00)',
                                        Reactive_Power: 'rgba(255,255,0,0.00)', Energy: 'rgba(255,255,0,0.00)', Reactive_Energy: 'rgba(43, 226, 177, 0.1)',
                                        Angle: 'rgba(255,255,0,0.00)', Charge: 'rgba(255,255,0,0.00)', Force: 'rgba(255,255,0,0.00)', Acceleration: 'rgba(255,255,0,0.00)',
                                    })
                                }}>
                                    <Image source={require('./assets/convert/Reactive_Energy.png')} style={{ height: 25, width: 40, alignSelf: 'center', bottom: -23 }} />
                                </TouchableHighlight>
                            </Animated.View>




                            <Animated.View style={{ transform: [{ scale: this.springValue20 }] }}>
                                <TouchableHighlight style={{ backgroundColor: this.state.Angle, marginLeft: 5, height: 70, width: 70, borderRadius: 100, }} onPress={() => {
                                    {/*Angle*/ }
                                    this.spring(20);
                                    this.setState({
                                        dropdown_options: ['deg', 'rad', 'grad', 'arcmin', 'arcsec'],
                                        value1: 'deg',
                                        value2: 'rad',
                                        convertee: '',
                                        inputValue: ' ',
                                        status: 'Angle',
                                        status_image: './assets/status_image/Angle.png',

                                        //Color
                                        Length: 'rgba(255,255,0,0.00)', Area: 'rgba(255,255,0,0.00)', Mass: 'rgba(255,255,0,0.00)', Volume: 'rgba(255,255,0,0.00)',
                                        Volume_Flow_Rate: 'rgba(255,255,0,0.00)', Temperature: 'rgba(255,255,0,0.00)', Time: 'rgba(255,255,0,0.00)',
                                        Frequency: 'rgba(255,255,0,0.00)', Speed: 'rgba(255,255,0,0.00)', Pace: 'rgba(255,255,0,0.00)', Pressure: 'rgba(255,255,0,0.00)',
                                        Digital: 'rgba(255,255,0,0.00)', Illuminance: 'rgba(255,255,0,0.00)', Parts_Per: 'rgba(255,255,0,0.00)',
                                        Voltage: 'rgba(255,255,0,0.00)', Current: 'rgba(255,255,0,0.00)', Apparent_Power: 'rgba(255,255,0,0.00)',
                                        Reactive_Power: 'rgba(255,255,0,0.00)', Energy: 'rgba(255,255,0,0.00)', Reactive_Energy: 'rgba(255,255,0,0.00)',
                                        Angle: 'rgba(43, 226, 177, 0.1)', Charge: 'rgba(255,255,0,0.00)', Force: 'rgba(255,255,0,0.00)', Acceleration: 'rgba(255,255,0,0.00)',
                                    })
                                }}>
                                    <Image source={require('./assets/convert/Angle.png')} style={{ height: 30, width: 32, alignSelf: 'center', bottom: -17 }} />
                                </TouchableHighlight>
                            </Animated.View>


                            <Animated.View style={{ transform: [{ scale: this.springValue21 }] }}>
                                <TouchableHighlight style={{ backgroundColor: this.state.Charge, marginLeft: 5, height: 70, width: 70, borderRadius: 100, }} onPress={() => {
                                    {/*Charge*/ }
                                    this.spring(21);
                                    this.setState({
                                        dropdown_options: ['c', 'mC', 'μC', 'nC', 'pC'],
                                        value1: 'c',
                                        value2: 'mC',
                                        convertee: '',
                                        inputValue: ' ',
                                        status: 'Charge',
                                        status_image: './assets/status_image/Charge.png',

                                        //Color
                                        Length: 'rgba(255,255,0,0.00)', Area: 'rgba(255,255,0,0.00)', Mass: 'rgba(255,255,0,0.00)', Volume: 'rgba(255,255,0,0.00)',
                                        Volume_Flow_Rate: 'rgba(255,255,0,0.00)', Temperature: 'rgba(255,255,0,0.00)', Time: 'rgba(255,255,0,0.00)',
                                        Frequency: 'rgba(255,255,0,0.00)', Speed: 'rgba(255,255,0,0.00)', Pace: 'rgba(255,255,0,0.00)', Pressure: 'rgba(255,255,0,0.00)',
                                        Digital: 'rgba(255,255,0,0.00)', Illuminance: 'rgba(255,255,0,0.00)', Parts_Per: 'rgba(255,255,0,0.00)',
                                        Voltage: 'rgba(255,255,0,0.00)', Current: 'rgba(255,255,0,0.00)', Apparent_Power: 'rgba(255,255,0,0.00)',
                                        Reactive_Power: 'rgba(255,255,0,0.00)', Energy: 'rgba(255,255,0,0.00)', Reactie_Energy: 'rgba(255,255,0,0.00)',
                                        Angle: 'rgba(255,255,0,0.00)', Charge: 'rgba(43, 226, 177, 0.1)', Force: 'rgba(255,255,0,0.00)', Acceleration: 'rgba(255,255,0,0.00)',
                                    })
                                }}>
                                    <Image source={require('./assets/convert/Charge.png')} style={{ height: 35, width: 20, alignSelf: 'center', bottom: -19 }} />
                                </TouchableHighlight>
                            </Animated.View>


                            <Animated.View style={{ transform: [{ scale: this.springValue22 }] }}>
                                <TouchableHighlight style={{ backgroundColor: this.state.Force, marginLeft: 5, height: 70, width: 70, borderRadius: 100, }} onPress={() => {
                                    {/*Force*/ }
                                    this.spring(22);
                                    this.setState({
                                        dropdown_options: ['N', 'kN', 'lbf'],
                                        value1: 'N',
                                        value2: 'kN',
                                        convertee: '',
                                        inputValue: ' ',
                                        status: 'Force',
                                        status_image: './assets/status_image/Force.png',

                                        //Color
                                        Length: 'rgba(255,255,0,0.00)', Area: 'rgba(255,255,0,0.00)', Mass: 'rgba(255,255,0,0.00)', Volume: 'rgba(255,255,0,0.00)',
                                        Volume_Flow_Rate: 'rgba(255,255,0,0.00)', Temperature: 'rgba(255,255,0,0.00)', Time: 'rgba(255,255,0,0.00)',
                                        Frequency: 'rgba(255,255,0,0.00)', Speed: 'rgba(255,255,0,0.00)', Pace: 'rgba(255,255,0,0.00)', Pressure: 'rgba(255,255,0,0.00)',
                                        Digital: 'rgba(255,255,0,0.00)', Illuminance: 'rgba(255,255,0,0.00)', Parts_Per: 'rgba(255,255,0,0.00)',
                                        Voltage: 'rgba(255,255,0,0.00)', Current: 'rgba(255,255,0,0.00)', Apparent_Power: 'rgba(255,255,0,0.00)',
                                        Reactive_Power: 'rgba(255,255,0,0.00)', Energy: 'rgba(255,255,0,0.00)', Reactie_Energy: 'rgba(255,255,0,0.00)',
                                        Angle: 'rgba(255,255,0,0.00)', Charge: 'rgba(255,255,0,0.00)', Force: 'rgba(43, 226, 177, 0.1)', Acceleration: 'rgba(255,255,0,0.00)',
                                    })
                                }}>
                                    <Image source={require('./assets/convert/Force.png')} style={{ height: 15, width: 40, alignSelf: 'center', bottom: -25 }} />
                                </TouchableHighlight>
                            </Animated.View>


                        </View>
                    </ScrollView>


                    <View style={{ alignItems: 'center', justifyContent: 'center', right: 40 }}>
                        <Image source={{ uri: this.state.status_image }} style={{ height: 6, width: 10 }} />

                        <View style={{ width: 150, alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                            <Text adjustsFontSizeToFit={true} numberOfLines={1} style={{ fontSize: 40, color: 'rgba(43, 226, 177, 1)', fontFamily: 'ample5' }}> {this.state.status} </Text>
                        </View>

                        <Text style={{ color: 'silver', marginBottom: 20, fontFamily: 'ample5' }}> Type in a number to convert </Text>

                        <TextInput adjustsFontSizeToFit={true} keyboardType={"numeric"} keyboardAppearance={"dark"} style={{ fontFamily: 'ample5', textAlign: 'center', fontSize: 30, marginBottom: 20, height: 50, width: 130, alignSelf: 'center', backgroundColor: 'rgba(0, 0, 0, 0.3)', borderRadius: 15, color: 'white' }}
                            value={this.state.inputValue} onChangeText={(text) => { this.setState({ text }, () => { this.dropdown() }); }} >
                        </TextInput>

                        {/* Converted Number Circle */}
                        <View style={styles.answer}>
                            <Text adjustsFontSizeToFit={true} numberOfLines={1} style={{ color: 'white', textAlign: "center", fontFamily: 'ample5', fontSize: 45, right: 4, top: 5 }}> {this.state.convertee} </Text>
                        </View>
                        {/*=========================*/}


                        {/* Number to convert input box */}
                        <View style={{ flexDirection: 'column', paddingBottom: 10 }}>
                            <View style={{ backgroundColor: 'rgba(43, 226, 177, 0.1)', borderRadius: 20, paddingLeft: 20, paddingRight: 20, padding: 5, flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
                                <ModalDropdown style={{ top: 5 }} textStyle={styles.dropdownText} defaultValue={this.state.value1} options={this.state.dropdown_options}
                                    onSelect={(idx, value) => this.valueSet1(idx, value)} />
                                <Image source={require('./assets/dropdown.png')} style={{ height: 5, width: 8, alignSelf: 'center', }} />
                            </View>

                          
                                <TouchableHighlight onPress={() => {
                                    var temp1 = this.state.value1;
                                    var temp2 = this.state.value2;
                                    var change='up';
                                    if (this.state.arrow==='up'){
                                        change='down';
                                    }
                                    else{
                                        change='up';
                                    }
                                    this.setState({ value1: temp2, value2: temp1, arrow:change }, () => { this.dropdown(); });
                                    this.switchAnimation();
                                }}>
                                <View style={{alignSelf:'center'}}>
                                    <Animated.View style={{ transform: [{ scale: this.springValueSwitch }],   marginLeft: 10, marginRight: 10, margin: 10 }} >
                                        <Image source={require('./assets/switch1.png')} style={{ height: 50, width: 50, alignSelf: 'center', }} />
                                    </Animated.View>

                                    <Animated.View style={{ transform: [{ scale: this.springValueSwitch2 }], position:'absolute', marginLeft: 10, marginRight: 10, margin: 10 }} >
                                        <Image source={require('./assets/switch2.png')} style={{ height: 50, width: 50, alignSelf: 'center', }} />
                                    </Animated.View>
                                    </View>
                                </TouchableHighlight>


                                <View style={{ backgroundColor: 'rgba(43, 226, 177, 0.1)', borderRadius: 20, paddingLeft: 20, paddingRight: 20, padding: 5, flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
                                    <ModalDropdown style={{ top: 5 }} textStyle={styles.dropdownText} defaultValue={this.state.value2} options={this.state.dropdown_options}
                                        onSelect={(idx, value) => this.valueSet2(idx, value)} />
                                    <Image source={require('./assets/dropdown.png')} style={{ height: 5, width: 8, alignSelf: 'center', }} />
                                </View>

                        </View>
                           
    
    
                        {/*=========================*/}


                            {/*
                        <Text> {this.state.unit} </Text>
                        <Text> {this.state.value1} </Text>
                        <Text> {this.state.value2} </Text>
                        */}

                        </View>
                </LinearGradient>
            </TouchableWithoutFeedback>
                );
            }
        }
        
        
const styles = StyleSheet.create({

                    dropdownMenu: {
                    opacity: 0.95,
                borderRadius: 10,
                borderWidth: 0,
                width: 'auto',
                height: 300,
                backgroundColor: "#282B33",
        shadowOffset: {width: 0, height: 0, }, shadowColor: 'black',
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
        
    dropdown: {
                    width: 200,
            },
        
    dropdownText: {
                    fontFamily: 'ample5',
                textAlign: "center",
                fontSize: 30,
                color: 'white',
                marginRight: 3,
                marginBottom: 4,
            },
        
    answer: {
                    borderColor: 'rgb(43, 226, 177)',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 20,
                width: 150,
                height: 150,
                borderRadius: 509,
                borderWidth: 5,
            },
        
    icon: {
                    padding: 20,
                margin: 5,
                backgroundColor: 'blue',
                width: 70,
        
            }
        
        
        
        })
        
        
        
        
