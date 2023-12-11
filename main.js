function setup() {
    canvas=createCanvas(640,480)
    canvas.position(450,250)
    video=createCapture(VIDEO)
    video.hide()
    tintColor=""
}
function draw() {
    image (video,0,0,640,480)
    tint(tintColor)
}
function filterTinter() {
    tintColor=document.getElementById("color_name").value
}
function save() {
    save("foto.png")
}