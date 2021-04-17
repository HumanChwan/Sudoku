var boards = [ ["6...7..8...7..3.9...1...4........1.4..3.16.27.74..........8...6......91....127.3.","649571283527843691831692475268739154953416827174258369312985746785364912496127538"],
[".....3.......415......2.......4.861.16.....5.45..19..351....869.92..6........53..","945863721276941538831527496329458617168732954457619283513274869792386145684195372"],
["7.269..13......8.2.6.....9.63.91.5....8.36...27..8.1.............1...37.9......8.","782695413195743862463128795634917528518236947279584136346879251851462379927351684"],
["71..42...85.................7..6154....4.5....6..2.....86.....1..23.7.68...5..4..","713642895854139627629758314278961543931475286465823179386294751542317968197586432"],
["..825.9.1.....9..715......3.........72...4...53.9...........5...4......23..5.78.4","478253961263819457159746283984135726721684395536972148617428539845391672392567814"],
["35..4..2.9.428..53...3.1.6....82.41.........24....389............9..6.8..3..1...5","351649728964287153872351964793825416186794532425163897518432679249576381637918245"],
["7....849..15...6.73..5.......1.5..7....4..9.8..6.9.........6.8..5....341.........","762138495815924637349567812981653274523471968476892153234716589657289341198345726"],
[".5......94917........2.1.4.52.......9.4...2.......8..7.7.4..6......87.....6..51..","352864719491753862768291543527149386984376251613528497879412635135687924246935178"],
["5.9....4..........2..46....67259.....51.84......1...........827..7..16..46.92...5","519738246746215983283469751672593418951684372834172569195346827327851694468927135"],
["..372......5...1......45.....7...38.12.5....4.39.....2..14.3...2...8......4..1.7.","913726845465398127872145693547612389128539764639874512791463258256987431384251976"],
[".67........489..6...2...9.....56..3.6...4..9...9.7......8..6.5..7.2......5...37..","967425318314897265582631974741569832625348197839172546298716453173254689456983721"],
["4.3...5......248..89.7.6.2.6....23....5..7....8......75648......3.....8....5...4.","423918576756324891891756423679182354345697218182435967564879132937241685218563749"],
[".7.....4..8.....9..9..352............3..8.9.7..4....65.46.2........5943...8..7...","572961843683274591491835276769512384135486927824793165346128759217659438958347612"],
["..7.69.2..468..5....3.5.8...3...8..67.8....9..2.............7.......3.584....6..2","857469123246831579193257864534798216718624395629315487365982741972143658481576932"],
["8......65....16.....5......4.....2.6...3.2.........83...4..5.8.67.2.13.4...7..1..","821493765347516928965827413493158276186372549752649831214935687679281354538764192"],
["..6.4.328.......4.83......5159..........8...9.....143.5..8.......3....1..21..3..6","716549328295378641834126975159432867342687159678951432567814293983265714421793586"],
["..8..5.24..3...81.9..86....3...9....156.23......1......9...1......5...4..25......","768315924543972816912864537384796152156423798279158463497231685631587249825649371"],
["....18...98.2.....1.264..5...83.6.1....8....6......4..........26..1...4......5963","536918724984257631172643859748396215215874396369521487853469172697132548421785963"],
[".......62...6....9.1.......12....87......7...6....4.2.3..4.....28..931...4..1.7..","958741362732685419416932587125369874894127653673854921361478295287593146549216738"],
["9...67.8...29.3..7...8..2..76...182..34.............6...9....7.......6..82..7..1.","941267385682953147573814296765491823234786951198532764319648572457129638826375419"],
["4....3.2...12...........4.5.2....8..8...1..3.6.....2....39...8.2......56..6...1.9","467153928581249673932786415324597861879612534615834297143965782298471356756328149"],
[".2.....9.3...4...88...69..7...9..4......1....6....3.7..672...49...8.63..1..4.....","726358194319742658845169237251987463973614582684523971567231849492876315138495726"],
["..1..29.....5...7........4.2...5.36.56....1.77196..42...29.........7...2.4...6.5.","451762938396548271827391546284157369563429187719683425672935814135874692948216753"],
["....7.8.....4....3.9...2...6...........649.....73..5..13...4.6.4...2......29...78","256173894781495623394862157643257981815649732927318546139784265478526319562931478"],
["2...4......1.........1...3.....7.8.4.1.5.6..7.8.43..6..38...41...7..5...........2","293648571871253946546197238362971854914586327785432169638729415427815693159364782"],
["...7..2.43.2.45.7...........6...49.3.......1.....53.6...7....9......235.2....61..","591768234382145679476329581765814923823697415914253768657431892148972356239586147"],
[".4862.7...29.8.....3...4.6.......3.....89...........2.2....1.4.1..4...78.9..3.1..","548623791629187534731954862912746385365892417874315629286571943153469278497238156"],
["..16.4.....72...8......15..2..........9......8......2.5..8....4.86.2.1...1..75.9.","951684732647253981328791546274968315139542867865137429593816274786429153412375698"],
[".2...9..5..........7...2....1...32.72..5...698.....3....1.27.9..9.85..3....3...18","123469875964785123578132946615943287237518469849276351381627594496851732752394618"],
["....9.....8...73.2.2.5..............8.9......3..8..1.5..73.54.8...1...2.5...2..13","735296841986417352124583679651732984849651237372849165217365498493178526568924713"],
["..5...97...8....5....8.....4..5..2.......6.94617.......8..5..177..........4.27.86","345261978128794653976835142439578261852316794617942835283659417761483529594127386"],
["..9.......8.931.7.15.8.....91.3...8..3.......8.4.....92..7..35..4..1.2...7.4.3...","769254813482931576153867942916342785537698421824175639291786354348519267675423198"],
["32.5.4...5.1.8....9.4..3..........821.....59....4..1.7....2...5...3.9.4.......831","328564719561987423974213658457196382186732594239458167643821975815379246792645831"],
["9.4.2.........6....7.8493....7..4...382.....4...6......6..7.9.3218.3..........2.8","954123876823756491176849325697314582382597164541682739465278913218935647739461258"],
[".53.........7.9..57..3..91.2.65..8.........96...13............78192.......5...1..","953418762681729345724365918246597831137842596598136274362951487819274653475683129"],
["............269.....9...17.3......897....2....86...73........1.1....6..5...37.29.","863715924417269853259483176321657489794832561586194732932548617178926345645371298"],
["8..2....1.3..1.......7..65.642.71........8....5...4.1..........5...8.3...7..6.4.2","864259731735816924219743658642571893197328546358694217486932175521487369973165482"],
[".43.......86.9.....7....53..9..4.....6..73.9...2.........9.4.2..3...7.58....85.6.","143756289586392417279418536395841672864273195712569843658934721431627958927185364"],
["......6......5783..........9.6...5..2...891...3......21..2....572.....196..9.32..","318492657492657831567138924946721583275389146831546792189274365723865419654913278"],
["3.........6.28.....725.1..3......9..5.1.......8.62..57.....5...8.576.....9.8.....","358476219169283574472591683647158932521937846983624157216345798835769421794812365"],
["97.5..48.8.4..2.6...5.8.92....91..5...7..8.1.4.....6...9...7..1.....6.......5....","972561483834792165165384927628913754357648219419275638596827341781436592243159876"],
["2.7....46.1....7..54..1.....73........5....8.....2...4....4..1.1.....32..8.6....7","237985146918436752546712839873594261425167983691328574759243618164879325382651497"],
[".1..3..24.24.5..19.39...5.6..5..7......615..7....9...1..31.........43......96..4.","516839724824756319739421586165387492942615837378294651483172965691543278257968143"],
["5...2..31...7..4...7..41......9.....7...3...4....7....3.25...9.49.8..3.51.......8","548629731231785469679341852814956273765132984923478516382564197496817325157293648"],
["5.....81....5....71...246....4.7.....12..6..3....3..25.8.7............7......8.41","523967814649581237178324659354872196912456783867139425485713962291645378736298541"],
["45.7.....2...4..........7......12.....83.421.........3.652.184..7...8.35........7","451786392287943561639125784543612978798354216126897453365271849972468135814539627"],
["85.3..9.......637........6.6.5........3...2.....4...58479.5..2.........9....7..3.","856317942914286375327945861685792413143568297792431658479853126531624789268179534"],
["........5...8...3......1.....6...491...4.9.8..8.7.6...6...8.15.85..3.6..1.96.....","468273915591864237732591864276358491315429786984716523643987152857132649129645378"],
["..7..2....42381...6.........6..79.388.91.6............97...8.6...6..4..3.2.9....1","317692854542381679698547312261479538859136247734825196973218465186754923425963781"],
["..8....93.7.8.5...5...........2........16..82...5936..7.9.....1.2..8..5.65....7..","248671593976835124531429876367248915495167382812593647789354261123786459654912738"],
["9.......3..6.47........2.....2..64..3..8............98...5..2.....98..4.4.....68.","924658173186347952537192864892736415345819726671425398718564239263981547459273681"],
[".45..732....2..76.....3.8.5..4..6...7....9.34.53.2.6..2..........7...2....9....5.","145867329398245761672931845814356972726189534953724618261593487537418296489672153"],
["1..6...2....5................7.5..41.4...129.9.5...3..2..1.947....3.6....76.4.9..","134697528789523164562814739327958641648731295915462387253189476491376852876245913"],
["2...5..9.1493..5........1....19...8...8....23.5......7.........4.528..31.7...98..","287451396149362578536897142721943685968715423354628917813574269495286731672139854"],
[".2...9.51..64.1..8......7.4.5.64...7.79..5.6.4.....8..6.........9....2......5...9","724839651536471928918562734251648397879315462463927815682194573195783246347256189"],
["...63.5..8................66....1.38..2...9.4..4....5....21..6.9....3.....3.582..","149632587856197423237845196695421738382576914714389652578214369921763845463958271"],
["..1....82.4.91..6...9.5.1.....584..7.2...7.......2.6...6........5.4....828.......","531746982842913765679258143316584297425697831798321654163875429957462318284139576"],
["..6...8.4....2..1.8...1.32..6.3.....15..49.3..942..5.6........194..5.....2.......","216537894435928617879416325762385149158649732394271586683792451947153268521864973"],
["1....87..7....9.....6......8....2..1..2..146....3...78.7.8...3.92..4........6..4.","159638724743219586286574913867452391392781465415396278674825139928143657531967842"],
["9.7..3..1.3......8.2..1..9...3....4...1......47....8..8.....1.6...14...7..6.8..32","947863521135294768628715394283971645561438279479652813894327156352146987716589432"],
["..........7.......3.....81...5..93..74.3...6.....4615.5...1.697.16..4.......8..4.","458192736671538429329467815165829374742351968893746152584213697216974583937685241"],
["1....5.4....72..1...48...276..9....1..15....2..8......92...6........1...5..2....9","172635948859724316364819527645972831731548692298163754927456183486391275513287469"],
["..572....678..5....3.......751......3...74......1....8...2..74.2..36........17...","195723684678945321432681957751892463386574219924136578813259746247368195569417832"],
["..9.85...817.2.....5.......17......9.......422.8..7....94.68...5....92..7.2.4.8..","429685137817923456653174928176452389935816742248397615394268571581739264762541893"],
["95743...6.6.5....83........8...7......3.14....9.6...84...79..........7..5..386...","957438126164527398382961547845279631623814975791653284416792853238145769579386412"],
[".2.....3.9.....1855.7....9.3..9...5...8..3..............145.9..7..8.9..48...31...","126598437943762185587314296372946851458173629619285743231457968765829314894631572"],
["7...8..2...4.6..7..3...25....84....6...........2.59...6.9..5..2..3..84.5.5..4.3..","715984623284563971936172548578431296391627854462859137649315782123798465857246319"],
["..87...53....3.4...74...9......95..2........9......8315..41....839.5.........327.","298764153156839427374521986683195742712348569945672831527416398839257614461983275"],
["5...4..3....7.89.1......6......6..8...........761.4..98......4.....15..31....9..5","517946238624738951938251674491562387285397416376184529859673142762415893143829765"],
["....5..13....3198..........1.7..25.8.....61.76.2........3.8..59......7...9...7..6","428759613576431982931268475147392568359846127682175394713684259865923741294517836"],
[".........1....8..3..5..........3.5.9..89.1..73....48..7...8.......71...292.5...4.","893125674172648953645397281417836529268951437359274816736482195584719362921563748"],
["..19...3.87....5.............7......528..9.4.4..........5.3.8.22..1....7.9.27..1.","651982734873641529942357681137824956528769143469513278715436892284195367396278415"],
[".4.3.7.1.....614.2.......53165.......7....5.....2.3..1..4.......19......3....42..","542387916937561482681942753165478329273196548498253671824739165719625834356814297"],
["8453....2...58.....3..2...9.8.9..6.7.2483......7.6..........4............9..5..68","845396712279581346136724589381945627624837951957162834568219473413678295792453168"],
["..8.1.9..51.....72.92......45..........7........492.57.2.3.......1974...7....1.3.","678213945514869372392547168457186293269735481183492657926358714831974526745621839"]]

const board = document.querySelector('#board')
let boardIndex = Math.floor(Math.random()*54)
const boardstr = boards[boardIndex][0]
const solstr = boards[boardIndex][1]

console.log(boardstr)
console.log(solstr)

createBoard()
setBoard()
var sol = []
setSol()

var mistakes = 0

const elements = document.querySelectorAll('.element')
const buttons = document.querySelectorAll('[data-number]')
const deleteButton = document.querySelector('[data-delete]')


function createBoard() {
  for(let i = 0; i<9; i++) {
    let text = ""
    text += "<div>"
    for(let j = 0; j<9; j++) {
        let inputClass = "";
        if(i%3 == 0) {
            inputClass += "top-"
        } else if(i%3 == 1) {
            inputClass += "mid-"
        } else {
            inputClass += "bot-"
        }

        if(j%3 == 0) {
            inputClass += "left"
        } else if(j%3 == 1) {
            inputClass += "mid"
        } else {
            inputClass += "right"
        }

        if(i == 0 && j == 0) {
            inputClass += " top-left-corner"
        }
        if(i == 0 && j == 8) {
            inputClass += " top-right-corner"
        }
        if(i == 8 && j == 0) {
            inputClass += " bot-left-corner"
        }
        if(i == 8 && j == 8) {
            inputClass += " bot-right-corner"
        }
        text += '<input type="number" value="" id="num' + i + "-" + j+ '"class="element ' + inputClass + '"' + ' readonly>'
    }
    text += "</div>"
    board.innerHTML += text
  }
}

function setBoard() {
    let boardArr = boardstr.split('')
    document.querySelector('.mistakes').innerText = '0'

    let i = 0
    let elements = document.querySelectorAll('.element')
    elements.forEach(element => {
        element.classList.remove('user-input')
        element.classList.remove('incorrect')
        element.classList.remove('corrected')
        if(boardArr[i] != '.') {
            element.value = boardArr[i]
            element.classList.add('set-board')
            
        } else {
            element.value = '.'
            element.classList.remove('set-board')
        }
        i++
    })

}

function setSol() {
    let solArr = solstr.split('')
    let count = 0;
    for(let j = 0; j <9; j++) {
        sol.push([])
        for(let k = 0; k<9; k++) {
            sol[j].push(parseInt(solArr[count]))
            count++
        }
        
    }
}

function idToCoordinate(idstr) {
    return [parseInt(idstr.charAt(3)), parseInt(idstr.charAt(5))]
}

var selectedElement

document.addEventListener('click', () => {
    mistakes = document.querySelectorAll('.incorrect').length + document.querySelectorAll('.corrected').length
    document.querySelector('.mistakes').innerText = mistakes
    if(mistakes >=3) {
        setBoard()
        setSol()
        alert("You have made too many mistakes")
    }
})

elements.forEach(element => {
    
    element.addEventListener('click', () => {
        
        selectedElement = document.activeElement
        
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                if(!selectedElement.classList.contains('set-board')) {
                    selectedElement.value = button.innerText
                    
                    if(parseInt(sol[idToCoordinate(selectedElement.id.toString())[0]][idToCoordinate(selectedElement.id.toString())[1]]) == parseInt(button.innerText)) {
                        selectedElement.classList.add('user-input')
                        if(selectedElement.classList.contains('incorrect')) {
                            selectedElement.classList.add('corrected')
                        }
                        selectedElement.classList.remove('incorrect')
                    } else {
                        selectedElement.classList.add('incorrect')
                    }
                }
            })
        })

        deleteButton.addEventListener('click', () => {
            if(!selectedElement.classList.contains('set-board')) {
                selectedElement.value = ''
            }
        })
    })
})