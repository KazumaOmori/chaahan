<template>
    <div id="app">
        <ul>
            <li v-for="item in list" :key="item">
                <a class="button" @click="selectMenu(item)">{{ item }}</a>
            </li>
        </ul>
        <a class="button" v-if="order != ''" type="button" @click="decisionOrder()">
            <span style="font-size:150%; color:#333399;">注文確定</span>
        </a>

        <div>
            <img v-if="image != ''" v-bind:src="image" width="300" height="300"/>
        </div>
        {{ message }}

        <div class="div_aa">
            <p class="p_aa" v-html="aa"></p>
        </div>
        <!--<ul id="wrap">-->
            <!--<li><p style="text-align: left;" v-html="aa"></p></li>-->
        <!--</ul>-->
    </div>
</template>

<script>
/* eslint-disable no-cond-assign,camelcase */

export default {
  data: function () {
    return {
      order: '',
      list: ['ラーメン', 'チャーハン'],
      message: '何食べたい？',
      aa: '　　∧,,∧ </br>' +
        '　 ( ´・ω・）</br>' +
        '　 /　　 ｏ━ヽニニフ </br>' +
        '　 しー-Ｊ</br>',
      image: '',
      ramen_list: [
        ['鶏こく中華 すず喜', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13215409-720235c8dfa9f25471e0672e4aba9dabb01403e60322bc5ecf1d88c079939300.jpg'],
        ['喜楽', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13001705-81fbfd0fa01761f6d7bc106de5f1b0b8301aa22e2e180c182fd8a6214befa4c9.jpg'],
        ['創作麺工房 鳴龍', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13141302-ae5df2a60e46825ef1c746f2dbf5562cb23ae6fbc901b5a7b2c799a60c26f04e.jpg'],
        ['新橋 纏', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13156937-4f0ea3dc4e44ab8d17e73c9b59a881b0406bea39517b06c7ad66ea4faacff37c.jpg'],
        ['RAMEN CiQUE', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13048520-62de59782e4224475a28702c29f66ce285a1abc2ec58fcfc91834aaaf2ddafe0.jpg'],
        ['牛骨らぁ麺マタドール', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13128987-0b097303f8af2464358d2cf96cd007736b0abdebc8ba515710e108afdf3e061e.jpg'],
        ['BASSOドリルマン', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13057282-bd0a0f00493fa150e856e7b16628c32dcef41b26b6e8c190d4a89c33a882cca1.jpg'],
        ['八雲', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13204333-61e98e14eedb8c00f71f2a48f0f7d7e420f0489056af43d420967888a811ad9a.jpg'],
        ['麺屋一燈', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13111737-89c79cbdb2079e2d0fba06bff03ddf30467412e487d0b6065bda509d068ab161.jpg'],
        ['つけ麺 道', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13094595-1d4abaf253f2a04c01d297a66920916b4637baae6399e478ca46484c3ddcc22d.jpg'],
        ['麺処 銀笹', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13119563-d6d4484f12779036bdbdd1ba3167219134ec2a9e1c90e175f4ab32f65bce0dd9.jpg'],
        ['むぎとオリーブ 銀座店', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13164932-c3f8bf757f135d4b78f5839c346dcf4ee3a730be8b8941ac17e7d97a18592e57.jpg'],
        ['MENSHO', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13203848-146cff99a9d2735b0ce642b129cffbc18d4f25a5ab6a6c5ec4a35b59ef25ce08.jpg'],
        ['麺巧 潮', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13147387-add27fa6a2a60999dc549ef2ccd264b3fbbe535b29adbe72df29199b4e19c45a.jpg'],
        ['柴崎亭', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13135162-9b40263c6f324e420f8e6390f6d1d64788368efa410170e958bf06f28afe0b5d.jpg'],
        ['ラーメン英二', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13164704-069f3ae53af46c07273aabef43f33ae18eb2311d5099bd16b5561d0f0a0b6e47.jpg'],
        ['めだかタンタン', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13172508-292313540dfe2da79dca82ddaf47fecbfce2031f8d843f046b7a2f8b2d20c9ce.jpg'],
        ['食堂七彩', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13145418-636850e86db610eb74ebb6de7b7b73f4dc46ae0b1c5f1cc4bf33e3c5310592e5.jpg'],
        ['煮干鰮らーめん 圓', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13091258-e83405cf9a291288ef7563b44077725cce1f6d1c024dcd5805696011747d7882.jpg'],
        ['ろく月', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13161632-adcbbd0e9679197d158c21e60adc307c6418297e688bb2b08b832ed8183dfbd9.jpg'],
        ['手打式超多加水麺 ののくら', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13215713-4c6d76449bf85001b7c224319f762afe0c30b0355f0fcb3a2f0430100479730c.jpg'],
        ['ソラノイロ Japanese soup noodle free style 本店', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13126816-d4f3d0d92ab5257aa237a6e90862268b5e9f5f05d187b9991144e7bb398fdc9a.jpg'],
        ['中華めん処 道頓堀', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13003812-e69cced285382d8ea8c270ff2b0e1ee928ad897f587f9e9ab92162d00f2f9fc6.jpg'],
        ['ラーメン二郎 三田本店', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13006051-097d695beb21d5e6b1fcb1ed438bd5102a4cc80151d4e39134c261eb77a07c57.jpg'],
        ['麺屋ひょっとこ', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13046637-1d2ac30f11ece78caaf4d407dd8ca55eea40cfe5edcc19d786307a96e9c5fa0e.jpg'],
        ['麺屋 さくら井', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13202438-a31cdee60529303594005bcba31b5ab60674f7411fc2c7077ef4b8242a98bc8c.jpg'],
        ['ラーメン大至', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13042832-08f71a42661c3f70844244da648063a4b161ee7fe680052c6759c884d220f1a9.jpg'],
        ['らぁめん小池', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13172994-43ea8693d109b9fd4d3904b17926d7ea56f4310567d2d599ba68479175e446e0.jpg'],
        ['麺処 晴', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13143115-f27ca45daa01df8ebc4d44e08ae27c63130766f76e88538d336296234cf58381.jpg'],
        ['麺屋はなび 新宿店', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13170488-1701b3cfb994518b778453568dfc7ce482bbd4664011d8b735fcfa5c4ee8ba05.jpg'],
        ['中華そば ふくみみ', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13016486-4bd97afea69f623f2c510950cad69339ddb3bbda0e98921acd48f7262fb0d9af.jpg'],
        ['RAMEN GOTTSU', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13153294-8628be112d4b95675726f3cc73a3da655ff72600833723983a099c9cf2d20937.jpg'],
        ['ラーメン巌哲', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13167439-c5e51e2d8b98e01cdcbd2c600c5c581529bac076f1bf0fd9924cd1cfe590fe78.jpg'],
        ['一条流がんこラーメン総本家', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13126058-22796dc7cfdfb3cf583ffd1381caafa12a8c74a1df481f81849f70b39911976c.jpg'],
        ['麺屋吉左右', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13021140-65c6e1e71a2c8c78f07558cde89dc702c4fafd8fb34f187c86f7e2a33ad84599.jpg'],
        ['一汁三にぼし 裏不如帰', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13044967-ba486be7f1d6330d54fb58d438cce77bebebd81d48613c1b40f42e695913f7c8.jpg'],
        ['すごい煮干ラーメン凪 新宿ゴールデン街店本館', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13054766-6963b383c69f4608b79e0f3bbb6d86ee2e96b8b33538286973688d12907e5495.jpg'],
        ['中華そば ムタヒロ  1号店', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13131257-76aacf95e4a768074a5999b2fd87b784f603a112c8523d65f8eb664813fbd2ba.jpg'],
        ['陽はまたのぼる', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13206995-16efb93a3794fbbb4de1113c962e346f8cc86f3777ff3f89da8cabcaf5b2c7a5.jpg'],
        ['Homemade Ramen 麦苗', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13194812-0dbe2fd386ef9fb89a297099184f566c1cd92a96694aa42b0286c59f3c98084f.jpg'],
        ['中華そば べんてん', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13200351-76989887d841800937d40aab72337da4946b4302ddfa9ab68af66cca07a75dfa.jpg'],
        ['ラーメン屋 トイ・ボックス', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13162973-63baa7511305a988db228afec25b5e834ae4fbcf3c45acfd05705678706e9853.jpg'],
        ['麺や七彩', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13184399-8a65e92fb0f28a15ae9b1728f2c1c8383930ba425d99b59b00980f062febd617.jpg'],
        ['タンタン', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13046007-7dfe6f8447327c96d5b31596300af204cb4b7d09ea8143dad584912a80ab4a59.jpg'],
        ['麺屋 Hulu-lu', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13136428-2167f3208f3e87f3d9ec729e325f0855598f1e28479dfa872ecbcfa6fabfbfe3.jpg'],
        ['麺尊 RAGE', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13178309-620c4edb3093dc3bb3978496c34311695d6fc66f1af8244c9ed01d963a8b9027.jpg'],
        ['麺処 きなり', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13183631-45529702739fbc6dec292d706a4d7da28e8763de37de5225ba80c18590a34a49.jpg'],
        ['めん和正', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13050021-a0efc53a5375f20e151e575f39748eb76176eb7d5a8918a25e8ec033fdd9b4e8.jpg'],
        ['中華ソバ 伊吹', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13163874-6ce3b8d17177d9d95dbbea0490f9088312191444f24ab24227123f10e4933370.jpg'],
        ['中華そば しながわ', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13157559-632ec8b4808bc3c022bcda91d274545afc1644b0e9d11e21b64ba5c45056cb15.jpg'],
        ['町田汁場 しおらーめん進化 町田駅前店', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13165085-f8664b381f9346d3ac2207da95f3b5ae7a7b47301e244a4b19281b77e2a16a15.jpg'],
        ['らぁ麺 はやし田', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13216496-ddc69b7802d86f3d2004c5a679dc4a2dff938804d3b9a68a44e62e3aa7bb6aa7.jpg'],
        ['麺 みつヰ', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13203387-4bc98caae127a826c447357643ab84bc2f3b80f2678b1aba2622d3778ea0f9f0.jpg'],
        ['麺屋 瑞風', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13194366-ae78e9ccac4d84a86a2ce95038f2de8f3bafc5cb2be432ba43a52b698b46e9fa.jpg'],
        ['カネキッチン ヌードル', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13203355-45fe5c7169e8cca486afdd151db2f673932fbd053d6763e3b85ece44b37aa164.jpg'],
        ['饗 くろ喜', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13127743-10d07dc5f3687735b0ac28d80f0a6c0906f3c18e1e25f8cd662d44658d2cc413.jpg'],
        ['一番いちばん', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13001469-14f73d29a1858781febf33ac20258b79bd015982c2354d8b9597e7b1b71a5215.jpg'],
        ['らぁ麺 すぎ本', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13163409-7256c12a06bd4e6897c5c98d6f5dfb288f3810cbf9c28a5abcba285e3049d202.jpg'],
        ['麺処 びぎ屋', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13093976-9dd5ddcbdb4add68362fe2afabfce36bbb46bc993e0ca8b99fa5162daa2681dd.jpg'],
        ['四川担担麺 阿吽 湯島店', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13042564-0e0ed0ebe8d403a3d9e673a79df0b1c783ff25453f767565694c9878b33f7918.jpg'],
        ['田中商店 本店', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13003726-36910ba8712864d9efff26382ed21b313570ff22abad74d77764001b15cc8861.jpg'],
        ['ほっこり中華そば もつけ', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13192847-84198a25d0c5097b4b9a68d5bd97f328382f5c1ab23c4a573467463de62781ce.jpg'],
        ['くじら食堂', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13159891-bf380029d97af734538c7870b1bb0ceeba59516dfaa91cf29544e60ec1f44809.jpg'],
        ['はつね', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13000717-7c6ad155b9b5b2c217647564d75ae77c7bce57f28b9fbe0f6d269a15f8926762.jpg'],
        ['ラーメン二郎 八王子野猿街道店 ２', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13025633-b67e5f062232b4f77343f026f30b13784f19c660145d85f2dd137fd5e91a1770.jpg'],
        ['煮干しつけ麺 宮元', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13180862-726670664a67c5f014f0c2390844b9b9bb9abb56e4ab5fbf8dd04fa71ff837f9.jpg'],
        ['鶏そば  ムタヒロ 2号店', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13147068-816eb57e3aadca5c298f0ef5dc712952939600a8a1ca32dd680171bc1f96c9de.jpg'],
        ['らぁ麺やまぐち', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13151200-d145048d325161ad8efaf36999247ce1cbf442d03b444db36805ac84a965594b.jpg'],
        ['麺屋KABOちゃん', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13151928-f49ddea0edb629687a7723c47e4589661e8ec2b3f52adc07e542a19ce1032307.jpg'],
        ['麺屋 翔 本店', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13040181-9851a5c5c257be3ba70c45231f472e6cd9ec454c09ed018e016f264dc6261ce1.jpg'],
        ['麺処 篠はら', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13188419-9c14fb7d7098a50960862aa246534bb264733a8e876239ae0f6e894a677b5423.jpg'],
        ['麺処ほん田', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13047541-a5861e3e62b9220415a1d9b095d1aecc19fb34197292435f97b515a88f524927.jpg'],
        ['麺庵ちとせ', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13182327-faa006b906a073ef01087feb3a92e5a9c97e60b8714cd889fdafbf767fa91aef.jpg'],
        ['中華蕎麦 蘭鋳', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13113532-9232a6a6189782cc78ee8061e9eb51b73fdef80af5dd2c7ed025991e26ff344f.jpg'],
        ['中華そば多賀野', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13003421-c942d10b557fcdfea0f6b54426cea84df045bc81de6b46778fe3a91d44ef7489.jpg'],
        ['風雲児', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13044091-48f3e4d77a72b33b3b14f648689577c42402c3c65afc6b0dacd5b7d46ca33aa7.jpg'],
        ['かしわぎ', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13209326-305c8982a5a190ccbc0f33f0a8c03bbc90b8587306437dd0ce07a5cedc3c2d44.jpg'],
        ['六厘舎', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13093047-87ca3f9732d93a0fa107033641e89e2708a47553d3483d57eb19db3e72c24570.jpg'],
        ['らーめん 稲荷屋', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13180646-b308676a22b1b0a48037c4ed820cded9d9914feb94236ba7b346a90fe0595f79.jpg'],
        ['らーめん改', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13191776-d92e56bb4f8dcf763d2da5f1bbc7948f342f60811b7ca639a01576cb4111505d.jpg'],
        ['中華そば いづる', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13204179-1843c4f2072b72bb30b224386e56b499effc2d89c9c92946a98e8c98eaee10d7.jpg'],
        ['はやし', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13003367-fe971aa69688c0da7d72d50ac77e9b9afe65e462aa317d7a189fa549e267d912.jpg'],
        ['ラーメン二郎 ひばりヶ丘駅前店', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13024745-c3f5ad208659a1d8518f70264010be481c1206dd796c6bfa68af64cf12383c74.jpg'],
        ['こうかいぼう', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13005052-bd414a5d7683e9746c4d69088ef5e29e30e184de16746d78317d1a681d8a1e58.jpg'],
        ['竹末東京Premium', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13167920-f54446a242240b730ef35b1c43c874645459f4e533ed33fb46a038efe66ca0f0.jpg'],
        ['麺屋 ねむ瑠', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13186981-584f2f494e4eb731cbbf797cb702d39dab26efb754585a7ead7df4588c950f94.jpg'],
        ['たんたん亭', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13000705-67291682574b86c81b513c5a8e15f7df43a6ac85549d10fa2b3b88d288f57f89.jpg'],
        ['自家製麺 MENSHO TOKYO', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13171239-4eb7429f13109da48f612f0fbe34adb0adef4491b442177dc9d7d7f365022f51.jpg'],
        ['麺や 庄の', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13126304-413e4d713e449e6ff5a10061471c074fea271feef21cb65d16a95c3b20d2dfa6.jpg'],
        ['神名備', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13006070-9c3a0683e0778d634d0111394b4583c3967d98dc637d71a2d6f9f241100533a6.jpg'],
        ['超純水採麺 天国屋', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13162732-16d82e469ec69d78152b3576af0a2e62e6244a17cbd4dff2ab1312df83a71cdd.jpg'],
        ['中華そば しば田', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13162681-d2dc4230bbb8b4d3cfd6d631ef5ff3072fe1324b03e1e008932c2a3f4d0bcb02.jpg'],
        ['町田汁場 しおらーめん進化', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13050023-5a21f907b1a858697336da056788b804065090cb936424a821c7790054cdd265.jpg'],
        ['つけ麺 五ノ神製作所 新宿店', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13120708-db78c10c623e225b38879c157544414143879af397538b61f859dc8a5d42e0a4.jpg'],
        ['SOBA HOUSE 金色不如帰', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13022582-a8c2cb02939e04a27dd9c5a4a510c70b6ad3ca090b3ff0abf9437b33d5780fe0.jpg'],
        ['中華そば屋 伊藤', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13008779-67eb670d7b245d91ccac0de6e50f8ec9b9ae49873c208e33f1048767a229b245.jpg'],
        ['銀座 篝 Echika fit 銀座店', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13182836-572711e0c5779dbb07758c67f7b6c13a325c8a94fdaef75e305c88bb9358abcd.jpg'],
        ['燦燦斗', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13038064-180e8be72ebe736a54ace566a06136668fb6e01cdf6eb8117bb0c7e17c0f63f8.jpg'],
        ['Japanese Soba Noodles 蔦', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13136231-1532a8dd95fc8688b1a7ee033afe485f809a847b6b735e5095828028f30db76c.jpg'],
        ['おおぜき中華そば店', 'https://tblg-awd.k-img.com/assets/hyakumeiten2018/restaurants/ramen_tokyo/13147623-face81f19c54ba5c952e4d92d80d22996d9e466d50dac7c7b0ddad555d9120bf.jpg']
      ]
    }
  },
  methods: {
    selectMenu: function (key) {
      this.image = ''
      this.order = key
      this.message = key + 'にする？'
      this.aa =
        '　 　∧,,∧ </br>' +
        '　 ( ´・ω・）</br>' +
        '　 /　　 ｏ━ヽニニフ </br>' +
        '　 しー-Ｊ</br>'
    },
    decisionOrder: function () {
      if (this.order === this.list[0]) {
        this.aa = ''
        let ramen_no = Math.floor(Math.random() * 100)
        this.message = this.ramen_list[ramen_no][0]
        this.image = this.ramen_list[ramen_no][1]
      } else if (Math.floor(Math.random() * 10) > 1) {
        this.message = 'チャーハン作るよ！！'
        this.aa =
          '　 ∧,　,∧</br>' +
          '　(；`・ω・）　　｡･ﾟ･⌒） </br>' +
          '　/　　 ｏ━ヽニニフ))</br>' +
          '　しー-Ｊ</br>'
      } else {
        this.message = 'アッ！'
        this.aa =
          '　　　　　　　　　　　　｡･ﾟ･</br>' +
          '　∧,,∧ て　　　　　｡･ﾟ･｡･ﾟ･</br>' +
          '　(；´ﾟωﾟ）て　　　／／ </br>' +
          '　/　　 ｏ━ヽニニフ</br>' +
          '  しー-Ｊ　　 　彡</br>'
      }
      this.order = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.div_aa {
    display: flex;
    justify-content: center;
}

.p_aa {
    text-align: left;
}

.button {
    -webkit-appearance: none;
    border-radius: 0;
    display: inline-block;
    padding: .75em 4em;
    border: 2px solid #333;
    border-radius: 3em .5em 2em .5em/.4em 2em .5em 3em;
    color: #333;
    text-decoration: none;
    text-align: center;
}
</style>
