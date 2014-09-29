package code.comet

import net.liftweb.actor._
import net.liftweb.http._
import net.liftweb.json.JsonAST._
import js.JE
import js.JE._
import js.jquery.JqJE._
import js.JsCmds
import js._
import js.JsCmds._
import js.jquery.JqJsCmds._
import net.liftweb.http.SHtml._
import ElemAttr._
import net.liftweb.common._
import S._
import net.liftweb.util._
import scala.util.Random
import Helpers._
import xml._
import java.awt.Point

object BossFightServer extends LiftActor with ListenerManager{
  def createUpdate = Nil
  override def lowPriority = {
    case m => println(m)
  }
}

class BossFightClient extends CometActor with CometListener{
  override def registerWith = BossFightServer
  def render = NodeSeq.Empty
  override def lowPriority = {
    case m => println(m)
  }
}
