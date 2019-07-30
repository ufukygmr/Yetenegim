import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-ionicons';
import {observer, action, inject } from 'mobx-react';
import Header from './header'
class Premium extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }


  render() {
    return (
      <View>
          <Header />
          <Text  style = {styles.headerText}>Hesabınızı Yükseltin Profesyonel Futbolcu Olma Sansinizi Arttirin</Text>
          <ScrollView style = {styles.row}>
              <Text style = {styles.header2Text}>Premium satin aldiginizda kazanacaklariniz :</Text>
              <View style = {styles.container}>
                  <Icon name= "arrow-forward" style = {styles.premiumIcon}></Icon>
                  <Text style = {styles.premiumText}>Sınırsız video yükleme, hem süre hem miktar olarak.</Text>
              </View>
              <View style = {styles.container}>
                  <Icon name= "arrow-forward" style = {styles.premiumIcon}></Icon>
                  <Text style = {styles.premiumText}>İstenilen kişiye (scoutlar,menajerler,antrenörler,futbolcular) direkt mesaj atabilirsiniz  ve herkesin iletişim bilgilerini(telefon numarası ve email) görebilirsiniz.</Text>
              </View>
              <View style = {styles.container}>
                  <Icon name= "arrow-forward" style = {styles.premiumIcon}></Icon>
                  <Text style = {styles.premiumText}>Videolarınıza yorum yapılabilmesi, beğenilmesi ve oylanması (teker teker kimin sizi 10 üzerinden kaç oyladığını görebilirsiniz)</Text>
              </View>
              <View style = {styles.container}>
                  <Icon name= "arrow-forward" style = {styles.premiumIcon}></Icon>
                  <Text style = {styles.premiumText}>Videolarınızın kaç defa izlendiğini görebilirsiniz.</Text>
              </View>
              <View style = {styles.container}>
                  <Icon name= "arrow-forward" style = {styles.premiumIcon}></Icon>
                  <Text style = {styles.premiumText}>Seçmelerin  ne zaman nerde olduğuyla ilgili duyuru sayfasını görebilirsiniz aynı zamanda öğretici video ve makalelerin olduğu sayfalara erişebilirsiniz.</Text>
              </View>
              <View style = {styles.container}>
                  <Icon name= "arrow-forward" style = {styles.premiumIcon}></Icon>
                  <Text style = {styles.premiumText}>Takip etme ve takip edilme özelliğine sahip olup kimlerin sizi takip  ettiğini görebilirsiniz.</Text>
              </View>
              <View style = {styles.container}>
                  <Icon name= "arrow-forward" style = {styles.premiumIcon}></Icon>
                  <Text style = {styles.premiumText}>Uygulamaya yüklediğiniz  her video kaydedilip, profilinizle birlikte( fotoğraf ve oyuncu özellikleri) yeteneğim’e ait olan   instagram  sayfasında hesabınız etiketlenerek paylaşılacaktır;
 isim, soyisim, yaşadığınız yer ve iletişim bilgileriniz konulacaktır. Videolarınızın  aldığı rating (oylanma) , ve sizin kendinizle ilgili yazdığınız oyuncu özellikleriniz yazacaktır.</Text>
              </View>
              <View style = {styles.container}>
                  <Icon name= "arrow-forward" style = {styles.premiumIcon}></Icon>
                  <Text style = {styles.premiumText}>Yeteneğiminin bünyesinde yer alan Yeteneğim Spor malzelemelerindeki bütün ekipman ve ürünlerde yüzde 20 indirimle alışveriş imkanı elde ediceksiniz.</Text>
              </View>
              <View style = {styles.container}>
                  <Icon name= "arrow-forward" style = {styles.premiumIcon}></Icon>
                  <Text style = {styles.premiumText}> Yeteneğim ekibinin seçip, yetkililere önerdiği öne  çıkanlar listesine girme hakkına sahip olucaksınız.</Text>
              </View>
              <View style = {styles.container}>
                  <Icon name= "arrow-forward" style = {styles.premiumIcon}></Icon>
                  <Text style = {styles.premiumText}>Duyuru sayfasına koyduğumuz örnek antrenman videolarını oyuncuların çekmesi sağlanacaktır. Oyuncular örnek olarak gösterdiğimiz: şut, top sürme, pas, depar, kafa vuruşu, ve benzeri ( her mevki için fifa ratingine özel antrenman videoları konularak oyuncular yönlendirilicektir.) örnek olarak gösterdiğimiz antrenmanları yaptıktan sonra yeteneğim ekibi ve yeteneğim kullanıcıları 100 üzerinden oy vererek bu futbolculara genel bir fifa ratingi vericektir. (Yeteneğim ekibinin verdiği ve uygulamayı ziyaret eden insanların verdiği ortalama alınarak fifa ratingi verilecektir.)</Text>
              </View>
              <TouchableOpacity style = {styles.Lastcontainer}>
                  <Text style = {styles.satinAl}>Premium Satin Al </Text>
              </TouchableOpacity>
              <View styles = {styles.empty}></View>
          </ScrollView>
      </View>
    )
  }
}


const styles = StyleSheet.create({
    row: {
        margin: 10
    },
    headerText: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    header2Text:{
        fontSize: 18,
        fontWeight: 'bold',
        color:'#579ACF'
    },
    container: {
        flexDirection: 'row',
        paddingVertical: 5,
        paddingHorizontal: 10
    },
    Lastcontainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginBottom: 170,
        justifyContent: 'center',
        borderWidth : 1,
        borderRadius: 50,
        width: "50%",
        padding: 15,
        left: "45%",
        top: 20
    },
    premiumIcon: {
        fontSize: 18,
        marginTop: 2
    },
    premiumText:{
        fontSize: 18
    },
    empty: {
        height: 300
    }
})

export default Premium;
