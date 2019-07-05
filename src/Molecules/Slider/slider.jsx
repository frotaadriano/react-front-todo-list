import React, {Component} from 'react';  

const sliderStyle = {
    color: 'blue',
    color: 'red'
  };

  
  class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          planoInternetOriginal: 1,
          planoMinutosOriginal: 1450, 

          planoInternetNovo: 1,
          planoMinutosNovo: 1450, 

          max:2,
          taxaConvMinutos: 0,
          taxaConvInternet: 0,

          limiteInternet: 0,
          limiteMinutos: 0,  

          defaultValue:0
        }; 
        this.calcularTamanhoSlider = this.calcularTamanhoSlider.bind(this);
        this.calcularPosicaoBolinha = this.calcularPosicaoBolinha.bind(this);
      }

      componentDidMount(){
        // console.log('this.props.valorInicialInternet', this.props.valorInicialInternet);
        // console.log('this.props.valorInicialMinutos', this.props.valorInicialMinutos); 
        this.setState({
           max: this.calcularTamanhoSlider(this.props.valorInicialInternet, this.props.valorInicialMinutos, 
                                          this.props.limiteInternet, this.props.limiteMinutos, 
                                          this.props.taxaConvMinutos, this.props.taxaConvInternet) ,
           taxaConvMinutos: this.props.taxaConvMinutos  ,
           taxaConvInternet: this.props.taxaConvInternet ,
           defaultValue : this.calcularPosicaoBolinha(this.props.valorInicialInternet, this.props.limiteInternet, this.props.taxaConvInternet)

          });
      }
      

      calcularPosicaoBolinha(valorInicialInternet, limiteInternet, taxaConvInternet){
        var valor =  valorInicialInternet - limiteInternet;
        valor = valor/taxaConvInternet;
        return valor-1;
      }


      calcularTamanhoSlider(valorInicialInternet, valorInicialMinutos, limiteInternet, limiteMinutos, taxaConvMinutos,taxaConvInternet){
        var internet =  valorInicialInternet - limiteInternet;
        internet = internet/taxaConvInternet;

        var minutos = valorInicialMinutos - limiteMinutos;
        minutos = minutos/taxaConvMinutos;
        
        return internet + minutos;
      }

      handleSliderChange(event) {
       
        console.log(event.target.value);
        this.distribuirValores(event.target.value); 

        this.setState({
            planoInternetNovo: this.state.planoInternetNovo  - event.target.value , 
            planoMinutosNovo: this.state.planoMinutosNovo + event.target.value
        
        });

        // var id = event.target.id;
        // var value = event.target.value;
        //const slidersWeights = this.state.slidersWeights;
        // slidersWeights[id] = parseInt(value);
        // var sumOfCustomWeights = 0;
        // const slidersLabels = this.state.slidersLabels;
        // for (var i = 0; i < slidersLabels.length; i++)
        //   sumOfCustomWeights += slidersWeights[slidersLabels[i]];
        // this.setState({ slidersWeights, sumOfCustomWeights });
      }


      distribuirValores(novoValorSlider) {
        //console.log('cheou aqui na function: distribuirValores(novoValorSlider)...')
        
       }

    render() { 
        return (
            <div>
                 <div>
                     {this.state.planoInternetNovo} | {this.state.planoMinutosNovo}
                 </div>
                <input style={sliderStyle}
                    // id={slidersLabels[i]}
                    type="range"
                    defaultValue="0" 
                    min="0"
                    max={this.state.max}
                    className="slider"
                    onChange={this.handleSliderChange.bind(this)}
                    step="1"
                />
            </div> 
        );
    }
}


export default Slider;
